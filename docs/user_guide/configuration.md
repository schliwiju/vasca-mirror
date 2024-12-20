# Configuration

VASCA's pipeline can be configured using yaml files. See [`vasca/vasca_cfg.yml`](https://github.com/rbuehler/vasca/blob/main/vasca/vasca_cfg.yaml)
as an example below. For a more concrete example see the pipeline tutorial [here](../tutorials/tutorial_pipe.md).

```yaml
---
authors : "UC science"
comment : "Example configuration file"

general:
    name            : "ALL_10-800" #"TDS_ELAISN1"#"ALL_10-800" # #"ALL_10-800_LOOSE"  #""TDS_ELAISN1" # "ALL_10-800"
    out_dir_base    : "./examples/vasca_pipeline"        # If "CWD" current work directory will be used.
    log_level       : "INFO"                            # ["NONE", "DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"]
    log_file        : "default"                          # Will be written into "out_dir", if ""default" a default name will be created 
    nr_cpus         : 8                                  # Number of CPUs to use. If "null" all available are used.
    save_ref_srcs   : true                               # Store reference sources into region file
    run_fields      : true                             # If fields have already been clustered and saved and should be reused set to "false". Otherwise the default is true
    
resources:                      
    load_method      : "VASCA"                  # Allowed are ["MAST_REMOTE", "MAST_LOCAL", "VASCA", "AUTO"]
    load_products    :  "TABLES"                           # Data products from MAST:  "NONE", "TABLES" for tables and reference image, "ALL" for tables and visit images
    coadd_exists     : true                           # Coadd detection catalogs are available (co-added images may exist). If false, sections 'cluster_coadd_dets', 'selection/src_coadd_diff' and 'observations/<observatory>/coadd_det_quality' are unused
    field_kwargs:
        data_path        : null
        visits_data_path : null 

cluster_src:
    meanshift:
        bandwidth     : 4               # In arcsec, to estimate it automatically specify "null"
        seeds         : null
        bin_seeding   : false
        min_bin_freq  : 1
        cluster_all   : true
        n_jobs        : 1
        max_iter      : 300
        table_name    : "tt_sources"

cluster_coadd_dets:
    meanshift:
        bandwidth     : 4               # In arcsec, to estimate it automatically specify "null"
        seeds         : null
        bin_seeding   : false
        min_bin_freq  : 1
        cluster_all   : true
        n_jobs        : 1
        max_iter      : 300
        table_name    : "tt_coadd_detections"

assoc_src_coadd:
    dist_max      : 1        # Associate nearest source below this distance in arc_sec  OR
    dist_s2n_max  : 3        # Associate nearest source with this distance in units of "squared sumed position error"

selection_src:
    src_variability_nuv:
        table       : "tt_sources"
        presel_type : "or"
        sel_type    : "and"
        obs_filter  : "NUV"                             # Select filter to apply cut on, see vasca.utils.dd_filter_id for definitions
        range:
            nr_det: [ 3,.inf ]
            pos_cpval: [ 0.0001,.inf ]
            pos_xv: [ -.inf,2 ]
            flux_cpval     : [-0.5,0.000000573303]  # 5 sigma, see https://en.wikipedia.org/wiki/Normal_distribution
            flux_nxv       : [0.001,.inf]          # Excess variance above ~sqrt(cut)*100%
            flux           : [0.144543,575.43]      # Flux in 1e-6Jy, mag 17-26, see conversion table to AB magnitudes at the end
    src_coadd_diff_nuv:
        table       : "tt_sources"
        presel_type : "or"
        sel_type    : "and"
        obs_filter  : "NUV" 
        range:
            nr_det: [ 2,.inf ]
            pos_cpval: [ 0.0001,.inf ]
            pos_xv: [ -.inf,2 ]
            coadd_ffactor   : [2.0,.inf]
            coadd_fdiff_s2n : [7,.inf]
    src_variability_fuv:
        table       : "tt_sources"
        presel_type : "or"
        sel_type    : "and"
        obs_filter  : "FUV"                             # Select filter to apply cut on, see vasca.utils.dd_filter_id for definitions
        range:
            nr_det: [ 3,.inf ]
            pos_cpval: [ 0.0001,.inf ]
            pos_xv: [ -.inf,2 ]
            flux_cpval     : [-0.5,0.000000573303]  # 5 sigma, see https://en.wikipedia.org/wiki/Normal_distribution
            flux_nxv       : [0.01,.inf]          # Excess variance above ~sqrt(cut)*100%
            flux           : [0.144543,575.43]      # Flux in 1e-6Jy, mag 17-26, see conversion table to AB magnitudes at the end
    src_coadd_diff_fuv:
        table       : "tt_sources"
        presel_type : "or"
        sel_type    : "and"
        obs_filter  : "FUV"
        range:
            nr_det: [ 2,.inf ]
            pos_cpval: [ 0.0001,.inf ]
            pos_xv: [ -.inf,2 ]
            coadd_ffactor   : [2.0,.inf]
            coadd_fdiff_s2n : [7,.inf]
                    
observations:
    - observatory   : "GALEX"
      obs_filter    : "NUV"
      cluster_det:
          meanshift:
              bandwidth     : 4               # In arcsec, to estimate it automatically specify "null"
              seeds         : null
              bin_seeding   : false
              min_bin_freq  : 1
              cluster_all   : true
              n_jobs        : null
              max_iter      : 300
              table_name    : "tt_detections"
    
      selection:
          det_quality:
              table       : "tt_detections"
              presel_type : "and"
              sel_type    : "and"
              # See variable description http://www.galex.caltech.edu/wiki/Public:Documentation/Appendix_A.1
              range:
                  s2n            : [3, .inf]
                  r_fov          : [0.0, 0.5]
                  ellip_world    : [0.0, 0.5]
                  size_world     : [0.0, 6.0]
                  class_star     : [0.15, 1.0]        # Extension classifier (extended=0, point like=1)
                  chkobj_type    : [-0.5,0.5]       # Matched to a bright star (0=no, 1=yes)
                  flux_app_ratio : [0.3,1.05]       # 
              bitmask:
                  # Specify the artifacts to remove
                  # For GALEX a description is at the end of this document
                  artifacts :  [2,4,8,128,256] #[2,4,8,128] ,8,16,32,64,128,256,512
              #If below/above this value will set it to min/max
              set_range:
                  pos_err : [0.5,5] # In arcsec
          det_association :
              table       : "tt_detections"
              ref_table   : "tt_sources"
              presel_type : "and"
              sel_type    : "is_in"
              var         : "fd_src_id"
          coadd_det_quality:
              table    : "tt_coadd_detections"
              presel_type : "and"
              sel_type : "and"  # These are all AND selections
              range:
                  s2n            : [5, .inf]
                  r_fov          : [0.0, 0.5]
                  ellip_world    : [0.0, 0.5]
                  size_world     : [0.0, 6.0]
                  class_star     : [0.15, 1.0]        # Extension classifier (extended=0, point like=1)
                  chkobj_type    : [-0.5,0.5]       # Matched to a bright star (0=no, 1=yes)
                  flux_app_ratio : [0.3,1.05]       #
              bitmask:
                  # Specify the artifacts to remove
                  # For GALEX a description is at the end of this document
                  artifacts :  [2,4,8,128,256] #[] ,8,16,32,64,128,256,512

      #obs_field_ids : !include ./examples/resources/GALEX_field_id_lists/field_ids_TDS_ELAISN1.yaml
      obs_field_ids : !include  ./examples/resources/GALEX_field_id_lists/field_ids_ALL_exp800_vis10_nuv_use.yaml

    - observatory   : "GALEX"
      obs_filter    : "FUV"
      cluster_det:
          meanshift:
              bandwidth     : 3               # In arcsec, to estimate it automatically specify "null"
              seeds         : null
              bin_seeding   : false
              min_bin_freq  : 1
              cluster_all   : true
              n_jobs        : null
              max_iter      : 300
              table_name    : "tt_detections"
    
      selection:
          det_quality:
              table       : "tt_detections"
              presel_type : "and"
              sel_type    : "and"
              # See variable description http://www.galex.caltech.edu/wiki/Public:Documentation/Appendix_A.1
              range:
                  s2n            : [3, .inf]
                  r_fov          : [0.0, 0.5]
                  ellip_world    : [0.0, 0.5]
                  size_world     : [0.0, 6.0]
                  class_star     : [0.15, 1.0]        # Extension classifier (extended=0, point like=1)
                  chkobj_type    : [-0.5,0.5]       # Matched to a bright star (0=no, 1=yes)
                  flux_app_ratio : [0.3,1.05]       # 
              bitmask:
                  # Specify the artifacts to remove
                  # For GALEX a description is at the end of this document
                  artifacts :  [2,4,8,128,256] #[] ,8,16,32,64,128,256,512
              #If below/above this value will set it to min/max
              set_range:
                  pos_err : [0.5,5] # In arcsec
          det_association :
              table       : "tt_detections"
              ref_table   : "tt_sources"
              presel_type : "and"
              sel_type    : "is_in"
              var         : "fd_src_id"
          coadd_det_quality:
              table    : "tt_coadd_detections"
              presel_type : "and"
              sel_type : "and"  # These are all AND selections
              range:
                  s2n            : [5, .inf]
                  r_fov          : [0.0, 0.5]
                  ellip_world    : [0.0, 0.5]
                  size_world     : [0.0, 6.0]
                  class_star     : [0.15, 1.0]        # Extension classifier (extended=0, point like=1)
                  chkobj_type    : [-0.5,0.5]       # Matched to a bright star (0=no, 1=yes)
                  flux_app_ratio : [0.3,1.05]       #
              bitmask:
                  # Specify the artifacts to remove
                  # For GALEX a description is at the end of this document
                  artifacts :  [2,4,8,128,256] #[] ,8,16,32,64,128,256,512

      #obs_field_ids : !include ./examples/resources/GALEX_field_id_lists/field_ids_TDS_ELAISN1.yaml
      obs_field_ids : !include ./examples/resources/GALEX_field_id_lists/field_ids_ALL_exp800_vis10_fuv_use.yaml

# GALEX artifact flags
# ( 1): edge; Detector bevel edge reflection (NUV only).
# ( 2): window; Detector window reflection (NUV only).
# ( 4): dichroic; Dichroic reflection.
# ( 8): varpix; Varible pixel based on time slices.
# ( 16): brtedge; Bright star near field edge (NUV only)
# ( 32): Detector rim(annulus); proximity(>0.6 deg fld ctr)
# ( 64): dimask; dichroic reflection artifact mask flag
# (128): varmask; Masked pixel determined by varpix.
# (256): hotmask; Detector hot spots.
# (512): yaghost; Possible ghost image from YA slope.
# http://www.galex.caltech.edu/wiki/GCAT_Manual#Flags

# mag(AB)	flux 1e-06 Jy
# 14.0	9120.108393559061
# 15.0	3630.7805477010033
# 16.0	1445.4397707459225
# 17.0	575.4399373371544
# 18.0	229.0867652767766
# 19.0	91.20108393559062
# 20.0	36.307805477010035
# 21.0	14.454397707459224
# 22.0	5.754399373371545
# 23.0	2.290867652767761
# 24.0	0.9120108393559042
# 25.0	0.36307805477010036
# 26.0	0.14454397707459224
# 27.0	0.05754399373371544

```