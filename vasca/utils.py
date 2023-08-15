#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Utilities for VASCA
"""
import hashlib
import warnings
from datetime import timedelta
from functools import wraps
from itertools import cycle, islice, zip_longest
from time import time

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from astropy import units as uu
from astropy.coordinates import SkyCoord, search_around_sky
from astropy.nddata import Cutout2D
from astropy.table import Column, Table
from astropy.time import Time
from astropy.utils.exceptions import AstropyWarning
from matplotlib import colormaps as cm
from matplotlib.colors import ListedColormap, hex2color
from scipy.stats import binned_statistic

from vasca.tables_dict import dd_vasca_columns

#: Dictionaries to define "VASCA consistent" filter ID Nr
#: Note that filter_id need to be powers of 2, to be able to be used as bitmask
#: 1,2,4,8,..
dd_filter2id = {"NUV": 1, "FUV": 2}
dd_id2filter = dict((v, k) for (k, v) in dd_filter2id.items())
# Inverted key&value dictionary

#: Global variable linking observatory + obsfilter to a field ID add-on
#: The number of Id add-on letter has to be three
#: See ``get_field_id`` function below.
dd_obs_id_add = {"GALEXNUV": "GNU", "GALEXFUV": "GFU", "GALEX_DSNUV": "GDS"}


# Dictionary organizing SIMBAD types into groups
# dd_ogrp2id = {
#     "AGN": 1,
#     "GAL": 2,
#     "STA": 3,
#     "CV": 4,
#     "WD": 5,
#     "VS": 6,
#     "PMS": 7,
# }
# dd_id2ogrp = dict((v, k) for (k, v) in dd_ogrp2id.items())

dd_ogrp2otypes = {
    "UNK": ["?", "none", "X", "IR", "Rad", "ev", "blu"],
    "AGN": ["AGN", "SyG", "Sy1", "Sy2", "rG", "LIN", "Bla", "BLL", "QSO", "ClG"],
    "GAL": ["G", "LSB", "bCG", "SBG", "H2G", "EmG"],
    "STA": ["*", "HB*", "LM*", "RG*", "RR*", "dS*"],
    "WD": ["WD*"],
    "VS": ["LP*", "Pu*", "V*"],
    "PMS": ["PM*"],
    "CV": ["CV*"],
    "BS": ["EB*", "SB*"],
    "LeI": ["EB*"],
    "SN": ["SN*"],
}
dd_otype2ogroup = dict()
for key, val in dd_ogrp2otypes.items():
    for ii in val:
        dd_otype2ogroup[ii] = key


def otype2ogroup(otype):
    "Returns object group for a given object type"
    if otype in dd_otype2ogroup.keys():
        return dd_otype2ogroup[otype]
    else:
        return dd_vasca_columns["ogrp"]["default"]


def sel_sources(tt_srcs):
    """
    Helper function to redo cuts, should be revisited/obsolete once table selection is
    rewritten

    Parameters
    ----------
    tt_srcs : astropy.table.Table
        DESCRIPTION.

    Returns
    -------
    sel_vasca : [bool]
        Selected sources.

    """

    # Cluster quality cut
    sel_pos_cpval = tt_srcs["pos_cpval"] > 1e-10

    # Flux variabiity cut
    sel_flux_nuv = (tt_srcs["flux"][:, 0] > 0.144543) * (tt_srcs["flux"][:, 0] < 575.43)
    sel_flux_fuv = (tt_srcs["flux"][:, 1] > 0.144543) * (tt_srcs["flux"][:, 1] < 575.43)
    sel_flux_cpval_nuv = (tt_srcs["flux_cpval"][:, 0] < 0.000000573303) * (
        tt_srcs["flux_cpval"][:, 0] > -0.5
    )
    sel_flux_cpval_fuv = (tt_srcs["flux_cpval"][:, 1] < 0.000000573303) * (
        tt_srcs["flux_cpval"][:, 1] > -0.5
    )
    sel_flux_nxv_nuv = tt_srcs["flux_nxv"][:, 0] > 0.0006
    sel_flux_nxv_fuv = tt_srcs["flux_nxv"][:, 1] > 0.0006
    sel_flux_nr_det_nuv = tt_srcs["nr_det"][:, 0] > 1
    sel_flux_nr_det_fuv = tt_srcs["nr_det"][:, 1] > 1
    sel_flux_var = (
        sel_flux_cpval_nuv * sel_flux_nxv_nuv * sel_flux_nr_det_nuv * sel_flux_nuv
        + sel_flux_cpval_fuv * sel_flux_nxv_fuv * sel_flux_nr_det_fuv * sel_flux_fuv
    )

    # Coadd flux difference cut
    sel_assoc_ffactor_nuv = tt_srcs["assoc_ffactor"][:, 0] > 1.5
    sel_assoc_fdiff_s2n_nuv = tt_srcs["assoc_fdiff_s2n"][:, 0] > 6
    sel_assoc_nr_det_nuv = tt_srcs["nr_det"][:, 0] > 0
    sel_assoc_ffactor_fuv = tt_srcs["assoc_ffactor"][:, 1] > 1.5
    sel_assoc_fdiff_s2n_fuv = tt_srcs["assoc_fdiff_s2n"][:, 1] > 6
    sel_assoc_nr_det_fuv = tt_srcs["nr_det"][:, 1] > 0
    sel_assoc = (
        sel_assoc_ffactor_nuv * sel_assoc_fdiff_s2n_nuv * sel_assoc_nr_det_nuv
        + sel_assoc_ffactor_fuv * sel_assoc_fdiff_s2n_fuv * sel_assoc_nr_det_fuv
    )

    sel_vasca = (sel_flux_var + sel_assoc) * sel_pos_cpval
    return sel_vasca


def sel_sources_nuv_only(tt_srcs):
    """
    Helper function to redo cuts, should be revisited/obsolete once table selection is
    rewritten

    Parameters
    ----------
    tt_srcs : astropy.table.Table
        DESCRIPTION.

    Returns
    -------
    sel_vasca : [bool]
        Selected sources.

    """

    # Cluster quality cut
    sel_pos_cpval = tt_srcs["pos_cpval"] > 1e-10

    # Flux variabiity cut
    sel_flux_nuv = (tt_srcs["flux"] > 0.144543) * (tt_srcs["flux"] < 575.43)
    sel_flux_cpval_nuv = (tt_srcs["flux_cpval"] < 0.000000573303) * (
        tt_srcs["flux_cpval"] > -0.5
    )
    sel_flux_nxv_nuv = tt_srcs["flux_nxv"] > 0.0006
    sel_flux_nr_det_nuv = tt_srcs["nr_det"] > 1
    sel_flux_var = (
        sel_flux_cpval_nuv * sel_flux_nxv_nuv * sel_flux_nr_det_nuv * sel_flux_nuv
    ).flatten()

    # Coadd flux difference cut
    sel_assoc_ffactor_nuv = tt_srcs["assoc_ffactor"] > 1.5
    sel_assoc_fdiff_s2n_nuv = tt_srcs["assoc_fdiff_s2n"] > 6
    sel_assoc_nr_det_nuv = tt_srcs["nr_det"] > 0
    sel_assoc = (
        sel_assoc_ffactor_nuv * sel_assoc_fdiff_s2n_nuv * sel_assoc_nr_det_nuv.flatten()
    )
    sel_vasca = (sel_flux_var + sel_assoc) * sel_pos_cpval
    return sel_vasca


def select_obs_filter(tt_in, obs_filter_id):
    """
    Helper function to select rows or columns ob the passed obs_filter_id in a table

    Parameters
    ----------
    tt_in : astropy.table.Table
        Input table
    obs_filter_id : TYPE
        Observation filter ID Nr.

    Returns
    -------
    tt : astropy.table.Table
        Copy of the input table with only entries for the requested filter.

    """
    tt = Table(tt_in, copy=True)
    nr_flts = len(
        np.array(tt[0]["obs_filter_id"]).flatten()
    )  # Check if var entries are arrays
    if obs_filter_id is not None:
        # If obs_id is in the table, select on it
        if nr_flts == 1:
            tt = tt[tt["obs_filter_id"].data.flatten() == obs_filter_id]
        else:
            flt_idx = np.where(tt["obs_filter_id"][0] == obs_filter_id)
            for colname in tt.colnames:
                nr_entries = len(np.array(tt[0][colname]).flatten())
                if nr_entries == nr_flts:
                    with warnings.catch_warnings():
                        warnings.simplefilter("ignore", AstropyWarning)
                        col_template_copy = dd_vasca_columns[colname].copy()
                        del col_template_copy["default"]
                        col = Column(
                            tt[colname][:, flt_idx].data.flatten(), **col_template_copy
                        )

                        tt.replace_column(colname, col)
    return tt


# TODO: Add check if flux <=0
def flux2mag(flux, flux_err=None):
    """
    Converts flux in Jy into AB magnitudes

    Parameters
    ----------
    flux : [Astropy Quantitiy or numpy array]
        Flux density array in micro Jy
    flux_err : [Astropy Quantitiy  or numpy array]
        Flux error array in micro Jy. Default is none.

    Returns
    -------
    mag : [Astropy Quantitiy]
        AB magnitude array. If flux was zero or positive -1 is returned.
    dmag : [Astropy Quantitiy], optional
        AB magnitude error array. If flux was zero or positive -1 is returned.
        If no flux errors are passed nothing is returned returned.

    """

    if type(flux) is not uu.quantity.Quantity:
        flux = np.array(flux) * 1e-6 * uu.Jy
    if (type(flux_err) is not type(None)) and (
        type(flux_err) is not uu.quantity.Quantity
    ):
        flux_err = np.array(flux_err) * 1e-6 * uu.Jy

    # Convert flux
    if np.sum(np.array(flux) < 1e-20) > 0:
        print("Warning, some input fluxes <0, returning np.nan for them")
        flux[np.array(flux) < 1e-20] = np.nan
    mag = flux.to("ABflux") * uu.ABmag

    # Convert flux error
    mag_err = None
    if type(flux_err) is not type(None):
        if np.sum(np.array(flux_err) < 1e-20) > 0:
            print("Warning, some input fluxe errors <0, returning np.nan for them")
            flux_err[np.array(flux_err) < 1e-20] = np.nan
        mag_err = mag - (flux + flux_err).to("ABflux") * uu.ABmag

    if flux_err is not None:
        return mag, mag_err
    else:
        return mag


def mag2flux(mag):
    """
    Converts AB magnitudes to flux in Jansky

    Parameters
    ----------
    mag : [float]
        Array of AB magnitudes

    Returns
    -------
    astropy Quantity
        Flux in micro Jy

    """
    flux = (np.array(mag) * uu.ABmag).to("1e-6Jy")
    return flux


def get_field_id(obs_field_id, observaory, obs_filter):
    """
    Return VASCA field id, which also includes observatory and filter identifier.
    The first 3 characters characterize the observatory and filter. Afterwards the
    observatory field ID is attached.

    Parameters
    ----------
    obs_field_id : int
        Field ID for the given observatory.
    observaory : str
        Observatory name.
    obs_filter : TYPE
        Observation filter.

    Returns
    -------
    str
        Region field identifier.

    """
    return dd_obs_id_add[str(observaory) + str(obs_filter)] + str(obs_field_id)


def extr_value(inputlist, upper=False):
    """
    Computes the extremum value in a list of numeric lists.

    Parameters
    ----------
    inputlist : list
        A list of numeric lists.
    upper : bool, optional
        Specifies whether to compute the maximum value. Defaults to False, which
        computes the minimum value.

    Returns
    -------
    float or None
        The computed extremum value if the input list is not empty and contains valid
        numeric values. Returns None if the input list is empty or contains only NaN
        values.

    Examples
    --------
    >>> extr_value([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    1

    >>> extr_value([[1, 2, 3], [4, 5, 6], [7, 8, 9]], upper=True)
    9

    >>> extr_value([[1, 2, 3], [4, 5], [6, 7, 8, 9]])
    1

    >>> extr_value([[1, 2, 3], [4, 5], [6, 7, 8, 9]], upper=True)
    9

    >>> extr_value([])
    None

    >>> extr_value([[], []])
    None

    >>> extr_value([[np.nan, np.nan], [np.nan, np.nan]])
    None

    >>> extr_value([[-1, 0, 1], [2, -3, 4], [5, -6, 7]])
    -6

    >>> extr_value([[-1, 0, 1], [2, -3, 4], [5, -6, 7]], upper=True)
    7
    """

    # Checks if input list is empty
    if len(inputlist) == 0:
        return None

    # if nested lists have different length
    # pads with np.nan to bring to uniform length
    padded_array = np.array(list(zip_longest(*inputlist, fillvalue=np.nan))).T

    # Checks if all elements are NaN
    if np.all(np.isnan(padded_array)):
        return None

    # Returns minimum or maximum value
    return np.nanmax(padded_array) if upper else np.nanmin(padded_array)


def get_hist_bins(data, bin_size):
    """
    Generates an array of bin edges for creating a histogram with specified bin size.

    Parameters
    ----------
    data : array-like, list
       The input data for which to generate the histogram bin edges. It can be either a
       1D numpy array or a list of lists. If it's a list of lists, each sub-list can
       have a different number of elements, and the bin edges will be determined based
       on the minimum and maximum values across all sub-lists (only one level of nesting
       is allowed)
    bin_size : float
       The desired width of each histogram bin.

    Returns
    -------
    numpy.ndarray
       An array of bin edges that can be used for creating a histogram of the input data

    Raises
    ------
    ValueError
       If the input data structure is not supported.

    Examples
    --------
    >>> data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    >>> bin_size = 2
    >>> get_hist_bins(data, bin_size)
    array([ 1.,  3.,  5.,  7.,  9., 11.])

    >>> data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    >>> bin_size = 1
    >>> get_hist_bins(data, bin_size)
    array([ 1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10.])

    >>> data = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]
    >>> bin_size = 0.5
    >>> get_hist_bins(data, bin_size)
    array([1. , 1.5, 2. , 2.5, 3. , 3.5, 4. , 4.5, 5. , 5.5, 6. , 6.5, 7. , 7.5,
          8. , 8.5, 9. , 9.5])

    """
    # Order of magnitude of the bin size
    om = np.floor(np.log10(bin_size))

    # The binning only works for integer arrays. To allow for bin sizes smaller than 1
    # the data needs to be scaled by the inverse of the bin size's order of magnitude
    if om < 0:
        bin_scale = np.power(10, abs(om))
    else:
        bin_scale = 1

    # Determines if list-type data is compatible.
    # Lists of lists with unequal number of elements are supported
    # (only one level of nested lists is allowed)
    is_list = False
    if isinstance(data, list):
        if all([isinstance(item, list) for item in data]):
            is_list = True
        elif all([np.isscalar(item) for item in data]):
            is_list = False
        else:
            raise ValueError(f"Data structure not supported for input data: \n{data}")

    # Gets minimum and maximum rounded to integer
    if is_list:
        vmin = np.floor(extr_value(data) * bin_scale)
        vmax = np.ceil(extr_value(data, upper=True) * bin_scale)
    else:
        vmin = np.floor(np.min(data) * bin_scale)
        vmax = np.ceil(np.max(data) * bin_scale)

    # Generate bin array, reverses scaling
    bins = (
        np.arange(vmin, vmax + bin_size * bin_scale, bin_size * bin_scale) / bin_scale
    )
    return bins


def sky_sep2d(coords, seperation_limit=180):
    """
    computes 2D distances between all possible pairs of coordinates
    that are closer together than the separation limit
    (default: 180 -> all-sky)

    if the all-sky case is set, the number of unique distance values
    is determined as follows:
    for the number of coordinates n = len(coords) a number of
    pairwise distances values N = 1/2 * (n-1)*n is returned
    """
    n_coords = len(coords)  # number of coordinates
    seperation_limit = seperation_limit * uu.degree  # maximum separation

    # computes the 2D distences between a pair of coordinates A and B
    # (returned as list, together with the indeces of the pairs)
    # both permutations of coordinates A and B are returned
    # this yields redundent results for the distance C = dist(A,B) = dist(B,A)
    idx1, idx2, sep2d, _ = search_around_sky(coords, coords, seperation_limit)

    # removing redundent results:

    # reshapes distances to square matrix
    n_coords = len(coords)
    sep2d_square = np.zeros((n_coords, n_coords))
    sep2d_square[(idx1, idx2)] = sep2d

    # takes the lower triangular matrix
    # without the main diagonal elements
    sep2d_tril = np.tril(sep2d_square, k=-1)

    # returns the unique distance values (flattened triangular matrix)
    nonzero_idx = np.flatnonzero(sep2d_tril)
    sep2d_flat = sep2d_tril.ravel()[nonzero_idx]
    return sep2d_flat


def get_time_delta(tt_visit_dates, unit=None):
    # set astropy unit, defaults to seconds
    if unit is None:
        unit = uu.second

    # return zero if input has only one element
    if len(tt_visit_dates) < 2:
        return 0
    else:
        # convert to array of astropy Time objects
        times = Time(tt_visit_dates, format="mjd")
        # calculate time deltas
        dtimes_sec = np.array([dt.to_value(unit) for dt in np.diff(times)])
        return dtimes_sec


def get_time_delta_mean(tt_visit_dates, unit=None, deviation=True):
    # set astropy unit, defaults to seconds
    if unit is None:
        unit = uu.second

    # return zero if input has only one element
    if len(tt_visit_dates) < 2:
        return 0 if not deviation else (0, 0)
    else:
        # convert to array of astropy Time objects
        times = Time(tt_visit_dates, format="mjd")
        # calculate mean value and standard deviation of time deltas
        dtimes_mean = np.mean(np.diff(times)).to_value(unit)
        dtimes_std = np.std([dt.to_value(unit) for dt in np.diff(times)])

        return dtimes_mean if not deviation else (dtimes_mean, dtimes_std)


def table_to_array(table):
    """
    Converts an astropy Table object into a regular numpy ndarray.
    Caveat: All table columns must have the same type.
    """
    # Table to structured ndarray
    x = np.array(table)
    dtype = x.dtype[0]  # Type of first column

    # Checks consistency of data types
    assert all(
        [x.dtype[i] == dtype for i in range(len(x.dtype.names))]
    ), f"Expected same dtype '{dtype}' for all columns. {x.dtype}"

    # Creates view (not a copy) to return a regular numpy array
    return x.view((dtype, len(x.dtype.names)))


def get_cutout(field, position, size):
    """
    Wrapper function to create a :py:class:`~astropy.nddata.Cutout2D` from a
    :class:`~vasca.field.BaseField` input.

    Parameters
    ----------
    field : :class:`~vasca.field.BaseField`
        Field data object from which the reference image data and
        corresponding WCS are used to create the cutout.
    position : :py:class:`tuple`, :py:class:`~astropy.coordinates.SkyCoord`
        The position of the cutout array’s center with respect to the data array.
        The position can be specified either as a (x, y) tuple of pixel coordinates
        or a :py:class:`~astropy.coordinates.SkyCoord`,
        in which case wcs is a required input.
    size : :py:class:`astropy.units.Quantity`
        The size of the cutout array along each axis. For more inforamtion
        see documentaiont of :py:class:`~astropy.nddata.Cutout2D`.

    Returns
    -------
    :py:class:`~astropy.nddata.Cutout2D`
    """
    return Cutout2D(field.ref_img.data, position, size, field.ref_wcs)


def get_cutout_bounds(cutout, out_frame="icrs"):
    """
    Returns :py:class:`~astropy.coordinates.SkyCoord` object
    defining a rectangular cutout with upperight and lower left pixels
    in coordinate system of ``out_frame``.

    Parameters
    ----------
    cutout : :py:class:`~astropy.nddata.Cutout2D`
        Cutout object from which to derive the bounds.
    out_frame : :py:class:`str`, :py:class:`~astropy.coordinates.BaseCoordinateFrame` \
    class or instance, or `:py:class:`~astropy.coordinates.SkyCoord` instance, optional
        Coordinate frame of returned :py:class:`~astropy.coordinates.SkyCoord` object.

    Returns
    -------
    :py:class:`~astropy.coordinates.SkyCoord`
    """
    # Corner pixels

    # lower left
    x_ll = 0
    y_ll = 0
    # upper right
    x_ur = cutout.data.shape[1]
    y_ur = cutout.data.shape[0]

    # Convert to world coordinates
    ll = cutout.wcs.pixel_to_world(x_ll, y_ll)
    ur = cutout.wcs.pixel_to_world(x_ur, y_ur)

    return SkyCoord([ll.ra, ur.ra], [ll.dec, ur.dec], frame=ll.frame).transform_to(
        out_frame
    )


def get_cutout_mask(tt_mcat, cutout_bounds, frame="icrs"):
    """
    Returns a bool array to mask a coordinate dataset for given cutout bounds.

    Parameters
    ----------
    tt_mcat : :py:class:`~astropy.table.Table`
        Table to be masked
    cutout_bounds : :py:class:`~astropy.coordinates.SkyCoord`

    Returns
    -------
    :py:class:`~numpy.ndarray`
    """
    # Handle column naming according to specified frame
    x, y = None, None
    if frame == "icrs" or frame == "fk5":
        x = "ra"
        y = "dec"
        mask_cutout_ra = (tt_mcat[x] <= cutout_bounds[0].ra) * (
            tt_mcat[x] >= cutout_bounds[1].ra
        )
        mask_cutout_dec = (tt_mcat[y] >= cutout_bounds[0].dec) * (
            tt_mcat[y] <= cutout_bounds[1].dec
        )
    elif frame == "galctic":
        x = "lon"
        y = "lat"
        mask_cutout_ra = (tt_mcat[x] <= cutout_bounds[0].l) * (
            tt_mcat[x] >= cutout_bounds[1].l
        )
        mask_cutout_dec = (tt_mcat[y] >= cutout_bounds[0].b) * (
            tt_mcat[y] <= cutout_bounds[1].b
        )

    return mask_cutout_ra * mask_cutout_dec


# TODO: This funtion  could be more effcient, as it works none vectorized.
# Best wait till astropy implements Multiindex (see below)
def add_rg_src_id(tt_ref, tt_add):
    """
    Helper function, adds "rg_src_id" based on "rg_fd_id" and "fd_src_id"
    from the passed reference table.

    Parameters
    ----------
    tt_ref : astropy.Table
        Reference table has to contain "rg_src_id", "rg_fd_id" and "fd_src_id"
    tt_add : astropy.Table
        Table to add "rg_src_id", has to contain "rg_src_id", "rg_fd_id" and "fd_src_id"

    Returns
    -------
    None.

    """

    # Create mapping from fd_src_id and field_id to rg_src_id
    # use pandas as this is not yet in astropy, see
    # https://github.com/astropy/astropy/issues/13176
    # https://pandas.pydata.org/pandas-docs/stable/user_guide/advanced.html
    pd_ref = tt_ref["rg_fd_id", "fd_src_id"].to_pandas()
    pd_add = tt_add["rg_fd_id", "fd_src_id"].to_pandas()
    ridx = pd.MultiIndex.from_frame(pd_ref)

    for aidx in range(0, len(pd_add)):
        loc_pair = (pd_add["rg_fd_id"][aidx], pd_add["fd_src_id"][aidx])
        idx = ridx.get_loc(loc_pair)
        tt_add[aidx]["rg_src_id"] = tt_ref[idx]["rg_src_id"]


def nb_fig(num=0, gr_size=None, **kwargs):
    """
    Helper function for plotting in Jupyter notebooks.
    Wraps :py:class:`matplotlib.pylplot.subplots`.

    Parameters
    ----------
    num : :py:class:`int`, :py:class:`str`, optional
        Figure number, i.e. name handle
    gr_size : :py:class:`tuple`, optional
        Golden ratio size. Figure width in inches. The hight
        is calculated according to the golden ratio.
    kwargs
        Parameters passed to :py:class:`~matplotlib.pylplot.subplots`

    Returns
    -------
    :py:class:`tuple`
        Tuple containg the figure and plot axis.
    """
    # Close figure, Jupyter doesn't do it...
    plt.close(num)

    # Set figure aspect ratio to golden ratio
    if gr_size is not None:
        gr = (1 + 5**0.5) / 2
        fig_size = (gr_size, gr_size / gr)
    elif "figsize" in kwargs:
        fig_size = kwargs.pop("figsize")
    else:
        fig_size = None

    # Return figure and axis
    fig, ax = plt.subplots(num=num, figsize=fig_size, **kwargs)
    return (fig, ax)


def binned_stat(
    x,
    values,
    statistic="mean",
    return_bin_edges=False,
    return_bin_idx=False,
    return_bin_centers=False,
    **bining_kwargs,
):
    """
    Compute a binned statistic for one or more sets of data.

    This wraps :py:class:`scipy.stats.binned_statistic` in combination
    with :py:class:`numpy.histogram_bin_edges`
    to support automatic & optimized calculation of the bin edges.
    """
    # Calculates the bin edges using Numpy
    edges = np.histogram_bin_edges(x, **bining_kwargs)

    # Computes the statistic evaluated for values in each bin of x
    results = binned_statistic(x=x, values=values, bins=edges, statistic=statistic)

    # Return results according to optional paramters
    out = list()
    if not any([return_bin_edges, return_bin_centers, return_bin_idx]):
        return results[0]
    else:
        out.append(results[0])

    if return_bin_edges:
        out.append(results[1])
    if return_bin_idx:
        out.append(results[2])
    if return_bin_centers:
        out.append(np.asarray((edges[:-1] + edges[1:]) / 2))

    return tuple(out)


def tgalex_to_astrotime(galex_timestamp, output_format=None, verbose=False):
    """
    Converts a GALEX time stamp to astropy.time.Time object
    with unix format and UTC scale.
    GALEX time is equal to UNIX time - 315964800.

    Parameters
    ----------
    galex_timestamp : float
        The GALEX time epoch.
    output_format : {None, "iso", "tt"}, optional
        Specifies the time format/scale of the return value
        The default is None where the GALEX time stamp is converted and returned
        astropy.time.Time object with format=unix and scale=utc.
        Keywords "iso" and "tt" change return value to str using the astropy methods
        astropy.time.Time.iso and astropy.time.Time.tt respectively.
    verbose : bool, default False
        Enable verbose printing to show format and scale if the converted time

    Returns
    -------
    astropy.time.Time or str
        An astropy.time.Time object or str depending on `output_format`.

    Raises
    ------
    ValueError
        Only floats or ints are supported for conversion
    """
    # parse input
    if not isinstance(galex_timestamp, (float, int)):
        raise ValueError("Time stamp must be float or integer.")

    # apply offset and convert
    galex_t_offset = 315964800
    epoch = galex_timestamp + galex_t_offset
    t = Time(epoch, format="unix")

    # return
    if output_format == "iso":
        if verbose:
            print(t.iso, t.iso.format, t.scale)
        return t.iso
    elif output_format == "tt":
        if verbose:
            print(t.tt, t.tt.format, t.tt.scale)
        return t.tt
    elif output_format == "mjd":
        return t.mjd
    elif output_format is None:
        return t


def galex_obs_info(lc, verbose=False):
    """
    Collects information form a light curve dataset
    (e.g. fetched using gPhoton.gAperture) and returns a pandas.DataFrame.
    The data frame contains columns for exposure time, observation gap time
    as well as observation start and stop date

    Parameters
    ----------
    lc : dictionary, data frame or astropy.Table
        GALEX light curve dataset.
        Requires existence of keys/columns named "t0" (start)
        and "t1" (stop) each containing numerical arrays with
        the start/stop time in GALEX time format.
    verbose : bool, default False
        Enable verbose printing

    Returns
    -------
    pandas.DataFrame
        A data frame containing the timing meta data of GALEX observations
        in human readable formats.
    """
    # collect info from light curve dataset
    obs_info = {
        "exposure time [s]": list(),
        "obs. gap [d,h:m:s]": list(),
        "start date [utc]": list(),
        "stop date [utc]": list(),
    }
    for run_idx in range(len(lc)):
        exposure_time = tgalex_to_astrotime(lc["t1"][run_idx]) - tgalex_to_astrotime(
            lc["t0"][run_idx]
        )
        # duration
        obs_info["exposure time [s]"].append(exposure_time.sec)
        # start
        obs_info["start date [utc]"].append(
            tgalex_to_astrotime(
                lc["t0"][run_idx],
                output_format="iso",
                verbose=False,
            )
        )
        # stop
        obs_info["stop date [utc]"].append(
            tgalex_to_astrotime(
                lc["t1"][run_idx],
                output_format="iso",
                verbose=False,
            )
        )
        # observation gap
        if run_idx < len(lc) - 1:
            obs_gap = tgalex_to_astrotime(lc["t0"][run_idx + 1]) - tgalex_to_astrotime(
                lc["t1"][run_idx]
            )
            # format
            sec = timedelta(seconds=obs_gap.sec)
            obs_info["obs. gap [d,h:m:s]"].append(sec)
        # fill last gap, witch is always zero, to match array dimensions
        if run_idx == len(lc) - 1:
            obs_info["obs. gap [d,h:m:s]"].append("0 days, 0:00:00")

    df_obs_info = pd.DataFrame(obs_info)
    if verbose:
        print(df_obs_info)

    return df_obs_info


def timeit(f):
    """
    Decorator to track total processing time (work in progress).
    """

    @wraps(f)
    def wrap(*args, **kw):
        ts = time()
        result = f(*args, **kw)
        te = time()
        print(f"func: {f.__name__:<15}, args: [{args}] took: {te-ts:10.2f} sec")
        return result

    return wrap


def marker_set(n, exclude=None, exclude_default=True):
    """
    Returns a list of `n` Matplotlib markers for use in plots.
    The list is generated by selecting markers from a curated set of markers
    supporting separate edge and face colors.
    By default, a set of markers are excluded, which can be overridden by
    providing the `exclude` argument.

    Parameters
    ----------
    n : int
        The number of markers to return.
    exclude : str, None, optional
        A list of markers to exclude from the selection.
    exclude_default : bool, optional
        Whether to exclude markers by default: ``[",", "8", "H"]``.

    Returns
    -------
    list
        A list of n markers
    """

    # All matplotlib markers with separate edge/face colors
    # List is curated so that markers look distinct also at small sizes
    # List is sorted such that neighboring markers don't look similar
    mpl_markers = {
        "o": "circle",
        "s": "square",
        "d": "thin_diamond",
        "*": "star",
        "v": "triangle_down",
        "X": "x_filled",
        "^": "triangle_up",
        "h": "hexagon1",
        "<": "triangle_left",
        "P": "plus_filled",
        ">": "triangle_right",
        "p": "pentagon",
        ".": "point",
        "D": "diamond",
        ",": "pixel",  # removed by default: looks the same as square
        "8": "octagon",  # removed by default: too similar to circle
        "H": "hexagon2",  # removed by default: too similar to hexagon1
    }

    # Combined list of excluded markers from user input and defaults
    if exclude is None:
        exclude = []
    if exclude_default:
        exclude = list(set([",", "8", "H", *exclude]))

    # Remove excluded markers
    mpl_markers_select = mpl_markers.copy()
    for m in exclude:
        del mpl_markers_select[m]

    # Create list of n markers
    markers = list(
        islice(
            cycle(list(mpl_markers_select.keys())),
            n,
        )
    )

    return markers


def color_palette(name, n, show_in_notebook=False):
    """
    Return a palette of `n` colors from the matplotlib registry and additional
    qualitative palettes adopted from seaborn.

    For continuous palettes, evenly-spaced discrete samples are chosen while
    excluding the minimum and maximum value in the colormap to provide better
    contrast at the extremes.

    For qualitative palettes (e.g. those from colorbrewer), exact values are
    indexed (rather than interpolated).

    Parameters
    ----------
    name : string
        Name of the palette. This should be a named matplotlib colormap.
    n : int
        Number of discrete colors in the palette.
    show_in_notebook : bool
        Wether to show the returned colors in a juypter notebook
    Returns
    -------
    list of RGBA tuples
    """

    # Defines qualitative color palettes from seaborn and matplotlib
    # fmt: off
    sns_qual_pals = dict(
        deep=["#4C72B0", "#DD8452", "#55A868", "#C44E52", "#8172B3",
              "#937860", "#DA8BC3", "#8C8C8C", "#CCB974", "#64B5CD"],
        deep6=["#4C72B0", "#55A868", "#C44E52",
               "#8172B3", "#CCB974", "#64B5CD"],
        muted=["#4878D0", "#EE854A", "#6ACC64", "#D65F5F", "#956CB4",
               "#8C613C", "#DC7EC0", "#797979", "#D5BB67", "#82C6E2"],
        muted6=["#4878D0", "#6ACC64", "#D65F5F",
                "#956CB4", "#D5BB67", "#82C6E2"],
        pastel=["#A1C9F4", "#FFB482", "#8DE5A1", "#FF9F9B", "#D0BBFF",
                "#DEBB9B", "#FAB0E4", "#CFCFCF", "#FFFEA3", "#B9F2F0"],
        pastel6=["#A1C9F4", "#8DE5A1", "#FF9F9B",
                 "#D0BBFF", "#FFFEA3", "#B9F2F0"],
        bright=["#023EFF", "#FF7C00", "#1AC938", "#E8000B", "#8B2BE2",
                "#9F4800", "#F14CC1", "#A3A3A3", "#FFC400", "#00D7FF"],
        bright6=["#023EFF", "#1AC938", "#E8000B",
                 "#8B2BE2", "#FFC400", "#00D7FF"],
        dark=["#001C7F", "#B1400D", "#12711C", "#8C0800", "#591E71",
              "#592F0D", "#A23582", "#3C3C3C", "#B8850A", "#006374"],
        dark6=["#001C7F", "#12711C", "#8C0800",
               "#591E71", "#B8850A", "#006374"],
        colorblind=["#0173B2", "#DE8F05", "#029E73", "#D55E00", "#CC78BC",
                    "#CA9161", "#FBAFE4", "#949494", "#ECE133", "#56B4E9"],
        colorblind6=["#0173B2", "#029E73", "#D55E00",
                     "#CC78BC", "#ECE133", "#56B4E9"]
    )
    mpl_qual_pals_size = {
        "tab10": 10, "tab20": 20, "tab20b": 20, "tab20c": 20,
        "Set1": 9, "Set2": 8, "Set3": 12,
        "Accent": 8, "Paired": 12,
        "Pastel1": 9, "Pastel2": 8, "Dark2": 8,
    }
    # fmt: on

    # Number of colors per palette
    qual_pals_size = {
        **mpl_qual_pals_size,
        **{k: len(v) for k, v in sns_qual_pals.items()},
    }
    # Collects all qualitative color palettes in RGBA
    qual_pals = {
        **{k: cm.get_cmap(k).colors for k in mpl_qual_pals_size},
        **{k: tuple([hex2color(c) for c in sns_qual_pals[k]]) for k in sns_qual_pals},
    }

    # Lists all known named colormaps (including reversed variants)
    known_cmaps = sorted(
        list(
            set(
                [
                    *list(cm.keys()),  # Matplotlib defaults
                    *list(qual_pals.keys()),
                    *[el + "_r" for el in qual_pals],
                ]
            )
        )
    )

    # Raises error if colormap name does not exist
    if name not in known_cmaps:
        raise ValueError(f"Unknown name '{name}'. Choose one of {known_cmaps}")

    # Determines wether colormap is in reversed order
    is_reversed = True if name.endswith("_r") else False
    # Colormap name without reverse-tag
    subname = name.rstrip("_r")

    # Computes color binning (between 0 and 1) and creates colormap objects
    # in case of qualitative palettes.
    # The binning is evenly spaced in case of continuous color maps
    # whereas for qualitative palettes the values are exactly indexed
    if subname in qual_pals:
        bins = np.linspace(0, 1, qual_pals_size[subname])[:n]
        if is_reversed:
            cmap = ListedColormap(qual_pals[subname]).reversed()
        else:
            cmap = ListedColormap(qual_pals[subname])
    else:
        bins = np.linspace(0, 1, int(n) + 2)[1:-1]
        cmap = cm.get_cmap(name)

    # Compliles discrete color palette in RGBA
    palette = list(map(tuple, cmap(bins)[:, :4]))

    # Create list of n colors
    colors = list(
        islice(
            cycle(palette),
            n,
        )
    )

    # Rich display of selected colors in jupyter notebooks
    if show_in_notebook:
        from IPython.display import display

        display(ListedColormap(colors, name))

    return colors


def name2id(name, bits=32):
    """
    Generates a 32-bit or 64-bit integer from a string input.

    Parameters
    ----------
    name : str,
        String input from which to generate the number
    bits : int, optional
        Bit-size of the output integer

    Returns
    -------
    int

    Raises
    ------
    ValueError
        If bits is neither 32 or 64
    """

    if bits == 32:
        hash_int = int.from_bytes(
            hashlib.sha256(name.encode("utf-8")).digest()[:4], "little"
        )  # 32-bit int
    elif bits == 64:
        hash_int = int.from_bytes(
            hashlib.sha256(name.encode("utf-8")).digest()[:8], "little"
        )  # 64-bit int
    else:
        raise ValueError(f"Expected 32 or 64 (type int) for parameter bits, got {bits}")

    return hash_int
