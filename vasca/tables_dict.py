#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Defines dictionary for the tables used by vasca.tables.TableCollection 
"""

import numpy as np


# global dictionaries defining the table structures
base_field = {
    "tt_field": {
        "names": ["field_id", "name", "ra", "dec", "observatory", "obs_filter", "sel"],
        "dtype": ["int64", "S64", "float64", "float64", "S64", "S64", "bool"],
        "units": ["1", "", "degree", "degree", "", "", "1"],
        "defaults": [-1, "none", -1.0, -1.0, "none", "none", True],
        "descriptions": [
            "Field source ID nr.",
            "Field name",
            "Center RA of the field (J2000)",
            "Center Dec of the field (J2000)",
            "Telescope of the observation (e.g. GALEX)",
            "Filter of the observation (e.g. NUV)",
            "Selection of rows for VASCA analysis.",
        ],
        "meta": {"DATAPATH": "None", "INFO": "Field information table"},
    },
    "tt_visits": {
        "names": ["vis_id", "time_bin_start", "time_bin_size", "sel"],
        "dtype": ["int64", "float64", "float64", "bool"],
        "units": ["1", "d", "s", "1"],
        "defaults": [-1, -1.0, -1.0, True],
        "descriptions": [
            "Visit ID nr.",
            "Visit exposure start date and time in MJD",
            "Visit exposure time in s",
            "Selection of rows for VASCA analysis.",
        ],
        "meta": {"INFO": "Visit information table"},
    },
    "tt_detections": {
        "names": [
            "vis_id",
            "fd_src_id",
            "det_id",
            "ra",
            "dec",
            "pos_err",
            "mag",
            "mag_err",
            "s2n",
            "sel",
        ],
        "dtype": [
            "int64",
            "int64",
            "int64",
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
            "bool",
        ],
        "units": [
            "1",
            "1",
            "1",
            "degree",
            "degree",
            "degree",
            "1",
            "1",
            "1",
            "1",
        ],
        "defaults": [-1, -1, -1, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, True],
        "descriptions": [
            "Visit ID associated to the visit detection",
            "Source ID associated to the visit detection",
            "Visit detection ID",
            "Visit detection RA (J2000)",
            "Visit detection Dec (J2000)",
            "Visit position error",
            "Visit detection magnitude",
            "Visit detection magnitude error",
            "Signal to noise",
            "Selection of rows for VASCA analysis.",
        ],
        "meta": {"INFO": "Visit detections table"},
    },
    "tt_ref_sources": {
        "names": ["det_id", "ra", "dec", "pos_err", "mag", "mag_err", "s2n", "sel"],
        "dtype": [
            "int64",
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
            "bool",
        ],
        "units": ["1", "degree", "degree", "degree", "1", "1", "1", "1"],
        "defaults": [-1, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, True],
        "descriptions": [
            "Reference source ID nr.",
            "Reference source RA (J2000)",
            "Reference source Dec (J2000)",
            "Reference position error",
            "Reference source magnitude",
            "Reference source magnitude error",
            "Signal to noise",
            "Selection of rows for VASCA analysis.",
        ],
        "meta": {"INFO": "Reference detections table"},
    },
    "tt_sources": {
        "names": [
            "fd_src_id",
            "ra",
            "dec",
            "nr_det",
            "nr_uls",
            "mag_mean",
            "mag_var",
            "mag_rchiq",
            "mag_dmax",
            "mag_dmax_sig",
            "ul_weight",
            "sel",
        ],
        "dtype": [
            "int64",
            "float64",
            "float64",
            "int64",
            "int64",
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
            "bool",
        ],
        "units": ["1", "degree", "degree", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        "defaults": [-1, -1.0, -1.0, -1, -1, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, True],
        "descriptions": [
            "Source ID nr.",
            "Source RA (J2000)",
            "Source Dec (J2000)",
            "Number of visit detections of the source",
            "Number of upper limits",
            "Mean flux magnitude",
            "Flux magnitude variace",
            "Flux magnitude reduced chisquared of the constant mean",
            "Maximum magnitude flux variation compared to average",
            "Maximum magnitude flux variation compared to average divided by magnitude error",
            "Nr of upper limits magnitude greater than mean magnitude divided by srt(nr_det)",
            "Selection of rows for VASCA analysis.",
        ],
        "meta": {"INFO": "Source infomation table", "CLUSTALG": "None"},
    },
    "tt_source_lc": {
        "names": ["time_start", "time_delta", "mag", "mag_err", "ul", "sel"],
        "dtype": [
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
            "bool",
        ],
        "units": ["d", "s", "1", "1", "1", "1"],
        "defaults": [-1.0, -1.0, -1, -1, -1.0, True],
        "descriptions": [
            "Visit exposure start date and time in MJD",
            "Visit exposure stop date and time in MJD",
            "Flux magnitude",
            "Flux magnitude error",
            "Flux magnitude upper limit",
            "Selection of rows for VASCA analysis.",
        ],
        "meta": {"INFO": "Light curve magnitude flux table for one source"},
    },
    "ta_sources_lc": {
        "names": [
            "fd_src_id",
            "mag",
            "mag_err",
            "ul",
            "time_bin_start",
            "time_bin_size",
        ],
        "dtype": ["int64", np.object_, np.object_, np.object_, np.object_, np.object_],
        "units": ["1", "1", "1", "1", "d", "s"],
        "defaults": [
            -1,
            np.array([-1.0], dtype=np.object_),
            np.array([-1.0], dtype=np.object_),
            np.array([-1.0], dtype=np.object_),
            np.array([-1.0], dtype=np.object_),
            np.array([-1.0], dtype=np.object_),
        ],
        "descriptions": [
            "Source ID Nr.",
            "Flux magnitude",
            "Flux magnitude error",
            "Flux magnitude upper limit",
            "Visit exposure start date and time in MJD",
            "Visit exposure time in s",
        ],
        "meta": {
            "INFO": "Light curve table for many sources. Stored in a variable-length-array format."
        },
    },
}
# For GALEX data products mcat descriptions see
# http://www.galex.caltech.edu/wiki/Public:Documentation/Appendix_A.1
galex_field = {
    "tt_visits": {
        "names": [
            *base_field["tt_visits"]["names"],
            "time_bin_size_alt_filt",
            "ra",
            "dec",
        ],
        "dtype": [*base_field["tt_visits"]["dtype"], "float64", "float64", "float64"],
        "units": [*base_field["tt_visits"]["units"], "s", "degree", "degree"],
        "defaults": [*base_field["tt_visits"]["defaults"], -1.0, -1.0, -1.0],
        "descriptions": [
            *base_field["tt_visits"]["descriptions"],
            "Visit exposure time of the alternative filter in s",
            "Center RA of the visit FoV (J2000)",
            "Center Dec of the visit FoV (J2000)",
        ],
        "meta": {**base_field["tt_visits"]["meta"]},
    },
    "tt_detections": {
        "names": [
            *base_field["tt_detections"]["names"],
            "r_fov",
            "artifacts",
            "point_src_prob",
            "bright_match",
            "flux_f60",
            "flux_f60_err",
            "flux_f38",
            "flux_f38_err",
            "E_bv",
        ],
        "dtype": [
            *base_field["tt_detections"]["dtype"],
            "float64",
            "int64",
            "float64",
            "int64",
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
        ],
        "units": [
            *base_field["tt_detections"]["units"],
            "degree",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
        ],
        "defaults": [
            *base_field["tt_detections"]["defaults"],
            -1.0,
            -1,
            -1.0,
            -1,
            -1.0,
            -1.0,
            -1.0,
            -1.0,
            -1.0,
        ],
        "descriptions": [
            *base_field["tt_detections"]["descriptions"],
            "Distance from center of FOV in degrees",
            "Logical OR of artifact flags",
            "Point-source probability: 0.0 (resolved), 1.0 (unresolved, mcat file filter_CLASS_STAR variable)",
            "Detection matched to a known star (bright_match=1, mcat file chkobj_type variable)",
            "Flux in a fixed circular 6.0 arcsec radius aperture in cts/sec",
            "Flux error in a fixed circular 6.0 arcsec radius aperture in cts/sec",
            "Flux in a fixed circular 3.8 arcsec radius aperture in cts/sec",
            "Flux error in a fixed circular 3.8 arcsec radius aperture in cts/sec",
            "Galactic reddening expressed as E(B-V) [mag]",
        ],
        "meta": {**base_field["tt_detections"]["meta"], "PRECUTS": "List of pre-cuts"},
    },
    "tt_ref_sources": {
        "names": [
            *base_field["tt_ref_sources"]["names"],
            "r_fov",
            "artifacts",
            "point_src_prob",
            "bright_match",
            "flux_f60",
            "flux_f60_err",
            "flux_f38",
            "flux_f38_err",
            "E_bv",
        ],
        "dtype": [
            *base_field["tt_ref_sources"]["dtype"],
            "float64",
            "int64",
            "float64",
            "int64",
            "float64",
            "float64",
            "float64",
            "float64",
            "float64",
        ],
        "units": [
            *base_field["tt_ref_sources"]["units"],
            "degree",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
        ],
        "defaults": [
            *base_field["tt_ref_sources"]["defaults"],
            -1.0,
            -1,
            -1.0,
            -1,
            -1.0,
            -1.0,
            -1.0,
            -1.0,
            -1.0,
        ],
        "descriptions": [
            *base_field["tt_ref_sources"]["descriptions"],
            "Distance from center of FOV in degrees",
            "Logical OR of artifact flags",
            "Point-source probability: 0.0 (resolved), 1.0 (unresolved)",
            "Detection matched to a known star (bright_match=1)",
            "Flux in a fixed circular 6.0 arcsec radius aperture in cts/sec",
            "Flux error in a fixed circular 6.0 arcsec radius aperture in cts/sec",
            "Flux in a fixed circular 3.8 arcsec radius aperture in cts/sec",
            "Flux error in a fixed circular 3.8 arcsec radius aperture in cts/sec",
            "Galactic reddening expressed as E(B-V) [mag]",
        ],
        "meta": {**base_field["tt_ref_sources"]["meta"], "PRECUTS": "List of pre-cuts"},
    },
}
region = {
    "tt_fields": {
        "names": [
            *base_field["tt_field"]["names"],
            "fov_diam",  # TODO: Add sky angle for ULTRASAT squared FoV
            "nr_vis",
            "time_bin_size_sum",
            "time_start",
            "time_stop",
        ],
        "dtype": [
            *base_field["tt_field"]["dtype"],
            "float64",
            "int64",
            "float64",
            "float64",
            "float64",
        ],
        "units": [*base_field["tt_field"]["units"], "degree", "1", "s", "d", "d"],
        "defaults": [*base_field["tt_field"]["defaults"], -1.0, -1, -1.0, -1.0, -1.0],
        "descriptions": [
            *base_field["tt_field"]["descriptions"],
            "Field radius or box size (depending on the observatory)",
            "Total number of visits of the field",
            "Total exposure time",
            "Start time of first exposure",
            "End time of last exposure",
        ],
        "meta": {**base_field["tt_field"]["meta"]},
    },
    "tt_visits": {
        "names": [*base_field["tt_visits"]["names"], "field_id"],
        "dtype": [*base_field["tt_visits"]["dtype"], "int64"],
        "units": [*base_field["tt_visits"]["units"], "1"],
        "defaults": [*base_field["tt_visits"]["defaults"], -1],
        "descriptions": [
            *base_field["tt_visits"]["descriptions"],
            "Field source ID nr.",
        ],
        "meta": {**base_field["tt_visits"]["meta"]},
    },
    "tt_coverage_hp": {
        "names": ["pix_id", "nr_vis", "exp"],
        "dtype": ["uint32", "uint32", "float32"],
        "units": ["1", "1", "1"],
        "defaults": [0, 0, -1],
        "descriptions": ["Healpix ID", "Nr of visits", "Total exposure"],
        "meta": {
            "DATAPATH": "None",
            "INFO": "Region observations properties in healpix binning.\
                     RING ordering and equatorial coordinates",
            "NSIDE": "None",
        },
    },
    "tt_ref_sources": {
        "names": [*base_field["tt_ref_sources"]["names"], "field_id"],
        "dtype": [*base_field["tt_ref_sources"]["dtype"], "int64"],
        "units": [*base_field["tt_ref_sources"]["units"], "1"],
        "defaults": [*base_field["tt_ref_sources"]["defaults"], -1],
        "descriptions": [
            *base_field["tt_ref_sources"]["descriptions"],
            "Field source ID nr.",
        ],
        "meta": {**base_field["tt_ref_sources"]["meta"]},
    },
    "tt_detections": {
        "names": [*base_field["tt_detections"]["names"], "field_id", "rg_src_id"],
        "dtype": [*base_field["tt_detections"]["dtype"], "int64", "int64"],
        "units": [*base_field["tt_detections"]["units"], "1", "1"],
        "defaults": [*base_field["tt_detections"]["defaults"], -1, -1],
        "descriptions": [
            *base_field["tt_detections"]["descriptions"],
            "Field source ID nr.",
            "Region source ID nr.",
        ],
        "meta": {**base_field["tt_detections"]["meta"]},
    },
    "tt_sources": {
        "names": [*base_field["tt_sources"]["names"], "field_id", "rg_src_id"],
        "dtype": [*base_field["tt_sources"]["dtype"], "int64", "int64"],
        "units": [*base_field["tt_sources"]["units"], "1", "1"],
        "defaults": [*base_field["tt_sources"]["defaults"], -1, -1],
        "descriptions": [
            *base_field["tt_sources"]["descriptions"],
            "Field source ID nr.",
            "Region source ID nr.",
        ],
        "meta": {**base_field["tt_sources"]["meta"]},
    },
    "ta_sources_lc": {
        "names": [*base_field["ta_sources_lc"]["names"], "field_id", "rg_src_id"],
        "dtype": [*base_field["ta_sources_lc"]["dtype"], "int64", "int64"],
        "units": [*base_field["ta_sources_lc"]["units"], "1", "1"],
        "defaults": [*base_field["tt_sources"]["defaults"], -1, -1],
        "descriptions": [
            *base_field["ta_sources_lc"]["descriptions"],
            "Field source ID nr.",
            "Region source ID nr.",
        ],
        "meta": {**base_field["ta_sources_lc"]["meta"]},
    },
}

# global, combined dictionary
class_keys = ["base_field", "galex_field", "region"]
class_dicts = [base_field, galex_field, region]
dd_vasca_tables = {c_key: c_dict for c_key, c_dict in zip(class_keys, class_dicts)}
