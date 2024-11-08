selector_to_html = {"a[href=\"../api/vasca/vasca.utils.html#vasca.utils.query_vizier_sed\"]": "<dt class=\"sig sig-object py\" id=\"vasca.utils.query_vizier_sed\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.utils.</span></span><span class=\"sig-name descname\"><span class=\"pre\">query_vizier_sed</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">ra</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">dec</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">radius</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">1.0</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/utils.html#query_vizier_sed\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Query VizieR Photometry tool around a given position.</p><p>The VizieR photometry tool is here\n.. url:: <a class=\"reference external\" href=\"http://vizier.u-strasbg.fr/vizier/sed/doc/\">http://vizier.u-strasbg.fr/vizier/sed/doc/</a></p></dd>", "a[href=\"../api/vasca/vasca.utils.html#vasca.utils.get_var_stat\"]": "<dt class=\"sig sig-object py\" id=\"vasca.utils.get_var_stat\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.utils.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_var_stat</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vals</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vals_err</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/utils.html#get_var_stat\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Calculate variability parameters</p></dd>", "a[href=\"../api/vasca/vasca.utils.html#vasca.utils.run_LombScargle\"]": "<dt class=\"sig sig-object py\" id=\"vasca.utils.run_LombScargle\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.utils.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run_LombScargle</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">tt_lc</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">nbins_min</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">40</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">freq_range</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">[0.03,</span> <span class=\"pre\">2]</span> <span class=\"pre\">/</span> <span class=\"pre\">uu.d</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/utils.html#run_LombScargle\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Calculate Lomb Scargle periodogram</p></dd>", "a[href=\"#post-processing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Post-Processing<a class=\"headerlink\" href=\"#post-processing\" title=\"Link to this heading\">\u00b6</a></h1><p>The value provided by VASCA not only comes from its data model and the source clustering\npipeline, but also from the wide-ranging suite of post-processing functionality. The most\nimportant ones are highlighted below:</p>", "a[href=\"../api/vasca/vasca.region.html#vasca.region.Region.cross_match_cds\"]": "<dt class=\"sig sig-object py\" id=\"vasca.region.Region.cross_match_cds\">\n<span class=\"sig-name descname\"><span class=\"pre\">cross_match_cds</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">query_radius</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">1.5</span> <span class=\"pre\">*</span> <span class=\"pre\">uu.arcsec</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">query_table</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">'I/355/gaiadr3'</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vizier_columns</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">['*',</span> <span class=\"pre\">'PQSO',</span> <span class=\"pre\">'PGal',</span> <span class=\"pre\">'PSS',</span> <span class=\"pre\">'RPlx',</span> <span class=\"pre\">'VarFlag',</span> <span class=\"pre\">'o_Gmag',</span> <span class=\"pre\">'RFRP',</span> <span class=\"pre\">'RFBP',</span> <span class=\"pre\">'AG',</span> <span class=\"pre\">'E(BP-RP)']</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">overwrite</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/region.html#Region.cross_match_cds\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Match sources in region with SIMBAD-catalogs or Vizier database catalog. Runs\nonly over selected sources.</p><p>None</p></dd>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`div.content ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
