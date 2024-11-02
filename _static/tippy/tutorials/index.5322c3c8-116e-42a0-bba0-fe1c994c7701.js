selector_to_html = {"a[href=\"test_table.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Table Display<a class=\"headerlink\" href=\"#table-display\" title=\"Link to this heading\">\u00b6</a></h1><p>This test tutorial shows a Pandas DataFrame as an interactive table.</p>", "a[href=\"tutorial_pipe.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Pipeline<a class=\"headerlink\" href=\"#pipeline\" title=\"Link to this heading\">\u00b6</a></h1><p>This is a tutorial showcasing VASCA\u2019s pipeline flow on a very simple example. The goal\nis to create a VASCA <a class=\"reference internal\" href=\"../api/vasca/vasca.region.html#vasca.region.Region\" title=\"vasca.region.Region\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">Region</span></code></a> from two <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.GALEXField\" title=\"vasca.field.GALEXField\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">GALEXField</span></code></a> for which we download the\nraw data online from <a class=\"reference external\" href=\"https://astroquery.readthedocs.io/en/latest/mast/mast.html\">MAST</a>.\nWe apply quality cuts and do source clustering followed by variability analysis and\nfinally source cross-matching.</p>", "a[href=\"tutorial_gal_vis.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">GALEX Visits<a class=\"headerlink\" href=\"#galex-visits\" title=\"Link to this heading\">\u00b6</a></h1><p>In this tutorial we are going to inspect the <em>GALEX visits table</em>. This is the full\nlist of observations by GALEX available on MAST. During initialization of a <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.GALEXField\" title=\"vasca.field.GALEXField\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">GALEXField</span></code></a>\nwith given field ID this list is searched for all visits belonging to this field.</p>", "a[href=\"simple_example.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Test Tutorial<a class=\"headerlink\" href=\"#test-tutorial\" title=\"Link to this heading\">\u00b6</a></h1><p>The contents of this page are edited in a python file which is converted to a markdown\nfile prior to the sphinx build and then executed during build time. See how long it\ntook to run this notebook <a class=\"reference internal\" href=\"#execution-statistics\">below</a>.</p>", "a[href=\"#intro\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Intro<a class=\"headerlink\" href=\"#intro\" title=\"Link to this heading\">\u00b6</a></h2><p>All tutorials are jupyter-based. This documentation uses <a class=\"reference external\" href=\"https://myst-nb.readthedocs.io/en/latest/index.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">myst-nb</span></code></a>\nand <a class=\"reference external\" href=\"https://jupytext.readthedocs.io/en/latest/index.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">jupytext</span></code></a> to execute and\nrender the content.</p><p>Additionally you can find various notebooks on post-processing VASCA\u2019s pipeline results\n<a class=\"reference external\" href=\"https://github.com/rbuehler/vasca/blob/main/vasca/examples\">here</a>:</p>", "a[href=\"tutorial_field.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">GALEXField<a class=\"headerlink\" href=\"#galexfield\" title=\"Link to this heading\">\u00b6</a></h1><p>This is a short tutorial on the <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.GALEXField\" title=\"vasca.field.GALEXField\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">GALEXField</span></code></a> class. This is an implementation of\nVASCA\u2019s <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.BaseField\" title=\"vasca.field.BaseField\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">BaseField</span></code></a> tailored to the specific needs of GALEX archival data. It\nserves first and foremost as the interface between the instrument specifics, like raw\ndata handling and nomenclature, and the rest of VASCA\u2019s functionality. Important are\nthe loading functions that download raw data from <a class=\"reference external\" href=\"https://astroquery.readthedocs.io/en/latest/mast/mast.html\">MAST</a>\nand load already processed field data into memory.</p>", "a[href=\"#tutorials\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">\u00b6</a></h1><p>In this section various tutorials are provided. This is a markdown file and this section\nis still under development.</p>", "a[href=\"tutorial_mast.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">MAST Download<a class=\"headerlink\" href=\"#mast-download\" title=\"Link to this heading\">\u00b6</a></h1><p>In this short tutorial the MAST query functions of <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.GALEXField\" title=\"vasca.field.GALEXField\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">GALEXField</span></code></a> are used to\ndownload fresh data.</p>", "a[href=\"#list-of-tutorials\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">List of Tutorials<a class=\"headerlink\" href=\"#list-of-tutorials\" title=\"Link to this heading\">\u00b6</a></h2>", "a[href=\"tutorial_rm.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Resource Manager<a class=\"headerlink\" href=\"#resource-manager\" title=\"Link to this heading\">\u00b6</a></h1><p>With <a class=\"reference internal\" href=\"../api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\" title=\"vasca.resource_manager.ResourceManager\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">ResourceManager</span></code></a> VASCA provides a utility that helps managing the raw input\ndata. Data volumes processed by VASCA are generally pretty large and use cases as well\nas computation and storage resources can vary. <a class=\"reference internal\" href=\"../api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\" title=\"vasca.resource_manager.ResourceManager\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">ResourceManager</span></code></a> adds an\nabstraction layer that is flexible enough to varying contexts while exposing a\nconsistent API to the rest ofVASCA\u2019s pipeline functions.</p><p>As an example, the processing of GALEX data for the proof-of-principle study was done\nby downloading raw data from <a class=\"reference external\" href=\"https://astroquery.readthedocs.io/en/latest/mast/mast.html\">MAST</a>\nto a local directory, running the pipeline on a regular office laptop. This directory\nwas then cloud-synced via DESY\u2019s NextCloud service to allow collaborative work with\nmultiple users on the same dataset.</p>"}
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
