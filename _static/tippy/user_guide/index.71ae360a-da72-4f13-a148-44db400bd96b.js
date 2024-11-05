selector_to_html = {"a[href=\"https://en.wikipedia.org/wiki/FITS\"]": "<p><b>Flexible Image Transport System</b> (<b>FITS</b>) is an open standard defining a digital file format useful for storage, transmission and processing of data: formatted as multi-dimensional arrays, or tables. FITS is the most commonly used digital file format in astronomy. The FITS standard was designed specifically for astronomical data, and includes provisions such as describing photometric and spatial calibration information, together with image origin metadata.</p>", "a[href^=\"https://en.wikipedia.org/wiki/FITS#\"]": "<p><b>Flexible Image Transport System</b> (<b>FITS</b>) is an open standard defining a digital file format useful for storage, transmission and processing of data: formatted as multi-dimensional arrays, or tables. FITS is the most commonly used digital file format in astronomy. The FITS standard was designed specifically for astronomical data, and includes provisions such as describing photometric and spatial calibration information, together with image origin metadata.</p>", "a[href=\"https://en.wikipedia.org/wiki/Light_curve\"]": "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/201_Penelope_light_curve.png/320px-201_Penelope_light_curve.png\" alt=\"Wikipedia thumbnail\" style=\"float:left; margin-right:10px;\"><p>In astronomy, a <b>light curve</b> is a graph of the light intensity of a celestial object or region as a function of time, typically with the magnitude of light received on the <i>y</i>-axis and with time on the <i>x</i>-axis. The light is usually in a particular frequency interval or band.</p>", "a[href^=\"https://en.wikipedia.org/wiki/Light_curve#\"]": "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/201_Penelope_light_curve.png/320px-201_Penelope_light_curve.png\" alt=\"Wikipedia thumbnail\" style=\"float:left; margin-right:10px;\"><p>In astronomy, a <b>light curve</b> is a graph of the light intensity of a celestial object or region as a function of time, typically with the magnitude of light received on the <i>y</i>-axis and with time on the <i>x</i>-axis. The light is usually in a particular frequency interval or band.</p>", "a[href=\"#intro\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Intro<a class=\"headerlink\" href=\"#intro\" title=\"Link to this heading\">\u00b6</a></h2><p>VASCA is based on a very simple data model as you can see illustrated by the image below.\nPhotometric detections from repeated observations (visits) are taken as input. They must\nbe associated to a uniquely defined patch on the sky, a <strong><em>field</em></strong>. These detections are\nthen clustered on the field level to form uniquely defined <strong><em>sources</em></strong>. Multiple fields\nare combined to form a <strong><em>region</em></strong>. Overlapping fields undergo a second clustering step\nto assure the uniqueness of sources also on the region level. The final output of VASCA,\nthe variable source catalog, is based on variability detection, cross-matching and\nclassification of the region-level sources.</p>", "a[href=\"../api/vasca/vasca.source.html#vasca.source.Source\"]": "<dt class=\"sig sig-object py\" id=\"vasca.source.Source\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.source.</span></span><span class=\"sig-name descname\"><span class=\"pre\">Source</span></span><a class=\"reference internal\" href=\"../_modules/vasca/source.html#Source\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Class to store all VASCA information for one particular\nsource. This class is for convenience, the same data is also found in the Field\nand Region classes containing this source.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html#astropy.table.Table\" title=\"(in Astropy v6.1)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Table</span></code></a>.</p></dd>", "a[href=\"instruments.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Supported Instruments<a class=\"headerlink\" href=\"#supported-instruments\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"../api/vasca/vasca.columns.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.columns\" title=\"vasca.columns\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.columns</span></code></a><a class=\"headerlink\" href=\"#module-vasca.columns\" title=\"Link to this heading\">\u00b6</a></h1><p>VASCA column definitions.</p><p>This module is currently not in productive use. Using this, the plan is to refactor the\ntables dictionary module in the future.</p>", "a[href=\"../api/vasca/vasca.visualization.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.visualization\" title=\"vasca.visualization\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.visualization</span></code></a><a class=\"headerlink\" href=\"#module-vasca.visualization\" title=\"Link to this heading\">\u00b6</a></h1><p>Visualization related methods for VASCA</p>", "a[href=\"configuration.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configuration<a class=\"headerlink\" href=\"#configuration\" title=\"Link to this heading\">\u00b6</a></h1><p>VASCA\u2019s pipeline can be configured using yaml files. See <a class=\"reference external\" href=\"https://github.com/rbuehler/vasca/blob/main/vasca/vasca_cfg.yaml\"><code class=\"docutils literal notranslate\"><span class=\"pre\">vasca/vasca_cfg.yml</span></code></a>\nas an example:</p>", "a[href=\"post_processing.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Post-Processing<a class=\"headerlink\" href=\"#post-processing\" title=\"Link to this heading\">\u00b6</a></h1><p>The value provided by VASCA not only comes from its data model and the source clustering\npipeline, but also from the wide-ranging suite of post-processing functionality. The most\nimportant ones are highlighted below:</p>", "a[href=\"../api/vasca/vasca.vasca_pipe.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.vasca_pipe\" title=\"vasca.vasca_pipe\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.vasca_pipe</span></code></a><a class=\"headerlink\" href=\"#module-vasca.vasca_pipe\" title=\"Link to this heading\">\u00b6</a></h1><p>Script that runs the VASCA pipeline.</p>", "a[href=\"#using-vasca\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Using <code class=\"docutils literal notranslate\"><span class=\"pre\">VASCA</span></code><a class=\"headerlink\" href=\"#using-vasca\" title=\"Link to this heading\">\u00b6</a></h2><p>More detailed information on using the package is provided on separate pages,\nlisted below.</p>", "a[href=\"../api/vasca/vasca.source.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.source\" title=\"vasca.source\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.source</span></code></a><a class=\"headerlink\" href=\"#module-vasca.source\" title=\"Link to this heading\">\u00b6</a></h1><p>Created on Thu Jan 19 10:17:54 2023</p><p>@author: buehler</p>", "a[href=\"../api/vasca/vasca.field.html#vasca.field.BaseField\"]": "<dt class=\"sig sig-object py\" id=\"vasca.field.BaseField\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.field.</span></span><span class=\"sig-name descname\"><span class=\"pre\">BaseField</span></span><a class=\"reference internal\" href=\"../_modules/vasca/field.html#BaseField\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Class that defines the basic\ndata structure for field-based analysis. One <em>field</em> is generally\nthe area in the sky covered by a telescope in one observation.\nA field is generally composed of several <em>visits</em> of the telescope\nat different times.</p><p>This class contains the main functionality for source\ndetection and drawing. To be inherited by field analysis classes,\nwhich can then be tailored to the needs of the observatories supported\nby the VASCA pipeline.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html\">astropy.table.Table</a>. To see a\ndescription of each of their columns run :meth: <cite>~vasca.field.BaseField.info</cite>.</p><p>None</p></dd>", "a[href=\"../api/vasca/vasca.tables.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.tables\" title=\"vasca.tables\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.tables</span></code></a><a class=\"headerlink\" href=\"#module-vasca.tables\" title=\"Link to this heading\">\u00b6</a></h1><h2>Module Contents<a class=\"headerlink\" href=\"#module-contents\" title=\"Link to this heading\">\u00b6</a></h2><h3>Classes<a class=\"headerlink\" href=\"#classes\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"../api/vasca/vasca.resource_manager.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.resource_manager\" title=\"vasca.resource_manager\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.resource_manager</span></code></a><a class=\"headerlink\" href=\"#module-vasca.resource_manager\" title=\"Link to this heading\">\u00b6</a></h1><p>Resource manager for VASCA</p>", "a[href=\"../api/vasca/vasca.region.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.region\" title=\"vasca.region\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.region</span></code></a><a class=\"headerlink\" href=\"#module-vasca.region\" title=\"Link to this heading\">\u00b6</a></h1><h2>Module Contents<a class=\"headerlink\" href=\"#module-contents\" title=\"Link to this heading\">\u00b6</a></h2><h3>Classes<a class=\"headerlink\" href=\"#classes\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"../api/vasca/vasca.utils.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.utils\" title=\"vasca.utils\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.utils</span></code></a><a class=\"headerlink\" href=\"#module-vasca.utils\" title=\"Link to this heading\">\u00b6</a></h1><p>Utilities for VASCA</p>", "a[href=\"../api/vasca/vasca.region.html#vasca.region.Region\"]": "<dt class=\"sig sig-object py\" id=\"vasca.region.Region\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.region.</span></span><span class=\"sig-name descname\"><span class=\"pre\">Region</span></span><a class=\"reference internal\" href=\"../_modules/vasca/region.html#Region\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Defines a region in the sky as a\nlist of vasca.field objects. It provides functionality to\nloop over fields to derive source lists, etc.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html\">astropy.table.Table</a>. To see a\ndescription of each of their columns run :meth: <cite>~vasca.Regions.info</cite>.</p><p>None</p></dd>", "a[href=\"../api/vasca/vasca.field.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.field\" title=\"vasca.field\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.field</span></code></a><a class=\"headerlink\" href=\"#module-vasca.field\" title=\"Link to this heading\">\u00b6</a></h1><p>Field classes for VASCA</p>", "a[href=\"../api/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">API Reference<a class=\"headerlink\" href=\"#api-reference\" title=\"Link to this heading\">\u00b6</a></h1><p>This page contains auto-generated API reference documentation <a class=\"footnote-reference brackets\" href=\"#f1\" id=\"id1\" role=\"doc-noteref\"><span class=\"fn-bracket\">[</span>1<span class=\"fn-bracket\">]</span></a>.</p>", "a[href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables.TableCollection\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables.</span></span><span class=\"sig-name descname\"><span class=\"pre\">TableCollection</span></span><a class=\"reference internal\" href=\"../_modules/vasca/tables.html#TableCollection\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Collection of <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html#astropy.table.Table\" title=\"(in Astropy v6.1)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Table</span></code></a> objects. Base calss for data storage\nclasses in VASCA.</p><p class=\"rubric\">Initialization</p></dd>", "a[href=\"../api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.resource_manager.</span></span><span class=\"sig-name descname\"><span class=\"pre\">ResourceManager</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">verbose</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/resource_manager.html#ResourceManager\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Manages access to external resources.</p><p>Resources like catalog files or large metadata files may be stored on\nremote storage systems such as DESY Sync &amp; Share (SAS) or LUSTRE.\nUsers may synchronize these resources onto their local systems\nto perform software analysis on the data. To aid collaborative development,\nthe <cite>ResourceManager</cite> provides an interface to find the locations of resources\non the user\u2019s local system.</p><p>The implementation requires a set of environment variables. The full list\nof variables is defined in <cite>CLASSDIR/resource_metadata/resource_envs.yml</cite>.\nUsers need to make sure these variables are known to the system. This can be\nachieved in two ways. Either the user manually sets each variable via\nthe shell config file (<cite>.bashrc</cite>, <cite>zshrc</cite>, etc.) or the instance of\n<cite>ResourceManager</cite> automatically sets the variables if the config file at\n<cite>PACKAGEDIR/.env</cite> is found.</p><p class=\"rubric\">Initialization</p></dd>", "a[href=\"pipeline.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Pipeline<a class=\"headerlink\" href=\"#pipeline\" title=\"Link to this heading\">\u00b6</a></h1><p>VASCA\u2019s pipeline flow is composed of individual components for which\nparallel processing is enabled.</p>", "a[href=\"#data-model\"]": "<figure class=\"align-default\" id=\"data-model\">\n<a class=\"bg-primary mb-1 reference internal image-reference\" href=\"../_images/VASCA_data_model_v2.jpg\"><img alt=\"data_model\" class=\"bg-primary mb-1\" src=\"../_images/VASCA_data_model_v2.jpg\" style=\"width: 400px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">The VASCA data model.</span><a class=\"headerlink\" href=\"#data-model\" title=\"Link to this image\">\u00b6</a></p>\n</figcaption>\n</figure>", "a[href=\"../api/vasca/vasca.tables_dict.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.tables_dict\" title=\"vasca.tables_dict\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.tables_dict</span></code></a><a class=\"headerlink\" href=\"#module-vasca.tables_dict\" title=\"Link to this heading\">\u00b6</a></h1><p>Defines dictionary for the tables used by vasca.tables.TableCollection</p>", "a[href=\"../api/vasca/vasca.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca\" title=\"vasca\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca</span></code></a><a class=\"headerlink\" href=\"#module-vasca\" title=\"Link to this heading\">\u00b6</a></h1><h2>Submodules<a class=\"headerlink\" href=\"#submodules\" title=\"Link to this heading\">\u00b6</a></h2>", "a[href=\"#user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">\u00b6</a></h1><p>This guide aims to introduce VASCA\u2019s basic functionality and central building blocks\nof the package\u2019s internals. Good understanding of the latter will help expanding VASCA\nto more instruments. For more detailed guides and descriptions see the respective <a class=\"reference internal\" href=\"../api/index.html\"><span class=\"std std-doc\">API reference</span></a>\nand <a class=\"reference external\" href=\"https://github.com/rbuehler/vasca/tree/main/vasca/examples\">Jupyter examples</a>.</p>", "a[href=\"data_model.html#vasca-tables\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">VASCA Tables<a class=\"headerlink\" href=\"#vasca-tables\" title=\"Link to this heading\">\u00b6</a></h3><p>Below is a short description of the most important tables that are used in VASCA:</p>", "a[href=\"data_model.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Data Model<a class=\"headerlink\" href=\"#data-model\" title=\"Link to this heading\">\u00b6</a></h1><p>VASCA uses a hierarchical data model which wich defines cosmic <em>sources</em>, individual\n<em>fields</em> and whole <em>regions</em> in the celestial sky.</p>"}
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
