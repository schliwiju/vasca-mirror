selector_to_html = {"a[href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.region\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.region\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">region</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Definitions of tables and columns for the <a class=\"reference internal\" href=\"../api/vasca/vasca.region.html#vasca.region.Region\" title=\"vasca.region.Region\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Region</span></code></a> class.</p></dd>", "a[href=\"#data-model\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Data Model<a class=\"headerlink\" href=\"#data-model\" title=\"Link to this heading\">\u00b6</a></h1><p>VASCA uses a hierarchical data model which wich defines cosmic <em>sources</em>, individual\n<em>fields</em> and whole <em>regions</em> in the celestial sky.</p>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"bg-primary mb-1 reference internal image-reference\" href=\"../_images/VASCA_data_model_v2.jpg\"><img alt=\"data_model\" class=\"bg-primary mb-1\" src=\"../_images/VASCA_data_model_v2.jpg\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">The VASCA data model.</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">\u00b6</a></p>\n</figcaption>\n</figure>", "a[href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.base_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.base_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">base_field</span></span><em class=\"property\"><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a><span class=\"p\"><span class=\"pre\">[</span></span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a><span class=\"p\"><span class=\"pre\">]</span></span></em><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Definitions of tables and columns for the <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.BaseField\" title=\"vasca.field.BaseField\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">BaseField</span></code></a> class.</p></dd>", "a[href=\"#input-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Input Data<a class=\"headerlink\" href=\"#input-data\" title=\"Link to this heading\">\u00b6</a></h2><p>Typically, astronomical photometric surveys observe the sky by segmenting it into fields\nwhich correspond to the field of view as defined by the instrument\u2019s telescope optics. A\nfield is then defined by a central coordinate and the diameter of the field of view.</p><p>VASCA relies as input on the science data products that missions/organizations create\nfrom their observational raw data. Specifically this means VASCA takes tables of\nphotometric detections that have a field and visit ID. For a reference of the full list\nof required columns can be see here: <a class=\"reference internal\" href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.base_field\" title=\"vasca.tables_dict.base_field\"><span class=\"xref myst py py-data\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">BaseField</span></code></span></a>, <a class=\"reference internal\" href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.region\" title=\"vasca.tables_dict.region\"><span class=\"xref myst py py-data\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Region</span></code></span></a></p>"}
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