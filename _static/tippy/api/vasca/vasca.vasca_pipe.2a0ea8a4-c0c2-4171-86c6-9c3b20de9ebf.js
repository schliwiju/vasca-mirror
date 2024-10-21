selector_to_html = {"a[href=\"#vasca.vasca_pipe.run_from_file\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run_from_file\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run_from_file</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span></dt><dd><p>Run VASCA pipeline from a configuration file passed with the ArgumentParser</p><p>None</p></dd>", "a[href=\"#vasca.vasca_pipe.keep_base_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.keep_base_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">keep_base_field</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">field</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Remove field data that is not needed for further analysis to save memory</p><p>None</p></dd>", "a[href=\"#vasca.vasca_pipe.run_cluster_fields\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run_cluster_fields\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run_cluster_fields</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">meanshift_cfg</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">tt_fd_src</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">tt_fd_det</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">cluster_coadd</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Helper function to do clustering for passed sources or detections.\nThe main purpose is to only keep the needed tables, to save memory usage</p></dd>", "a[href=\"#vasca.vasca_pipe.run\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vasca_cfg</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Runs the VASCA pipeline</p><p>None</p></dd>", "a[href=\"#api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">API<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.vasca_pipe.run_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run_field</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_nr</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">field_id</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">rg</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vasca_cfg</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Run analysis on a single field</p></dd>", "a[href=\"#module-vasca.vasca_pipe\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.vasca_pipe\" title=\"vasca.vasca_pipe\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.vasca_pipe</span></code></a><a class=\"headerlink\" href=\"#module-vasca.vasca_pipe\" title=\"Link to this heading\">\u00b6</a></h1><p>Script that runs the VASCA pipeline.</p>", "a[href=\"#functions\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Functions<a class=\"headerlink\" href=\"#functions\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.vasca_pipe.set_logger\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.set_logger\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">set_logger</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vasca_cfg</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Setup logger. Gets configuration from global config variable set with get_config.</p><p>None</p></dd>", "a[href=\"#module-contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Module Contents<a class=\"headerlink\" href=\"#module-contents\" title=\"Link to this heading\">\u00b6</a></h2><h3>Functions<a class=\"headerlink\" href=\"#functions\" title=\"Link to this heading\">\u00b6</a></h3>"}
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
