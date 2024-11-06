selector_to_html = {"a[href=\"#survey-stats\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Survey Stats<a class=\"headerlink\" href=\"#survey-stats\" title=\"Link to this heading\">\u00b6</a></h3><p>Below are several statistics on the GALEX data set.</p>", "a[href=\"../api/vasca/vasca.utils.html#vasca.utils.get_hist_bins\"]": "<dt class=\"sig sig-object py\" id=\"vasca.utils.get_hist_bins\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.utils.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_hist_bins</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">bin_size</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/utils.html#get_hist_bins\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Generates an array of bin edges for creating a histogram with specified bin size.</p></dd>", "a[href=\"#surveys\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Surveys<a class=\"headerlink\" href=\"#surveys\" title=\"Link to this heading\">\u00b6</a></h2><p>Find more about GALEX surveys on the documentation <a class=\"reference external\" href=\"http://www.galex.caltech.edu/researcher/techdoc-ch2.html#2\">page</a>\n<strong>AIS</strong>\n: All-Sky Imaging Survey. Exposure time of 100s over 26,000 square degrees of sky\nreaching a depth of mAB = 20-2 in both bands.</p>", "a[href=\"../api/vasca/vasca.utils.html#vasca.utils.color_palette\"]": "<dt class=\"sig sig-object py\" id=\"vasca.utils.color_palette\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.utils.</span></span><span class=\"sig-name descname\"><span class=\"pre\">color_palette</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">name</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">n</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">show_in_notebook</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/utils.html#color_palette\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Return a palette of <cite>n</cite> colors from the matplotlib registry and additional\nqualitative palettes adopted from seaborn.</p><p>For continuous palettes, evenly-spaced discrete samples are chosen while\nexcluding the minimum and maximum value in the colormap to provide better\ncontrast at the extremes.</p><p>For qualitative palettes (e.g. those from colorbrewer), exact values are\nindexed (rather than interpolated).</p><p>list of RGBA tuples</p></dd>", "a[href=\"../api/vasca/vasca.field.html#vasca.field.GALEXField\"]": "<dt class=\"sig sig-object py\" id=\"vasca.field.GALEXField\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.field.</span></span><span class=\"sig-name descname\"><span class=\"pre\">GALEXField</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_id</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_filter</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data_path</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">visits_data_path</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/field.html#GALEXField\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"#vasca.field.BaseField\" title=\"vasca.field.BaseField\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.field.BaseField</span></code></a></p><p>Instance of one GALEX field</p><p class=\"rubric\">Initialization</p><p>Initializes a new GALEXField instance with\nskeleton VASCA data structure.</p></dd>", "a[href=\"#galex-visits\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">GALEX Visits<a class=\"headerlink\" href=\"#galex-visits\" title=\"Link to this heading\">\u00b6</a></h1><p>In this tutorial we are going to inspect the <em>GALEX visits table</em>. This is the full\nlist of observations by GALEX available on MAST. During initialization of a <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.GALEXField\" title=\"vasca.field.GALEXField\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">GALEXField</span></code></a>\nwith given field ID this list is searched for all visits belonging to this field.</p>"}
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
