selector_to_html = {"a[href=\"#vasca.tables_dict.class_dicts\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.class_dicts\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">class_dicts</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd></dd>", "a[href=\"#vasca.tables_dict.dd_vasca_tables\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.dd_vasca_tables\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">dd_vasca_tables</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd></dd>", "a[href=\"#vasca.tables_dict.galex_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.galex_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">galex_field</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Extension of the <cite>base_field</cite> definitions for the <a class=\"reference internal\" href=\"vasca.field.html#vasca.field.GALEXField\" title=\"vasca.field.GALEXField\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">GALEXField</span></code></a> class</p></dd>", "a[href=\"vasca.field.html#vasca.field.BaseField\"]": "<dt class=\"sig sig-object py\" id=\"vasca.field.BaseField\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.field.</span></span><span class=\"sig-name descname\"><span class=\"pre\">BaseField</span></span><a class=\"reference internal\" href=\"../../_modules/vasca/field.html#BaseField\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Class that defines the basic\ndata structure for field-based analysis. One <em>field</em> is generally\nthe area in the sky covered by a telescope in one observation.\nA field is generally composed of several <em>visits</em> of the telescope\nat different times.</p><p>This class contains the main functionality for source\ndetection and drawing. To be inherited by field analysis classes,\nwhich can then be tailored to the needs of the observatories supported\nby the VASCA pipeline.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html\">astropy.table.Table</a>. To see a\ndescription of each of their columns run :meth: <cite>~vasca.field.BaseField.info</cite>.</p><p>None</p></dd>", "a[href=\"#data\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Data<a class=\"headerlink\" href=\"#data\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.tables_dict.class_keys\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.class_keys\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">class_keys</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">['base_field',</span> <span class=\"pre\">'galex_field',</span> <span class=\"pre\">'region']</span></em></dt><dd></dd>", "a[href=\"#module-vasca.tables_dict\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.tables_dict\" title=\"vasca.tables_dict\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.tables_dict</span></code></a><a class=\"headerlink\" href=\"#module-vasca.tables_dict\" title=\"Link to this heading\">\u00b6</a></h1><p>Defines dictionary for the tables used by vasca.tables.TableCollection</p>", "a[href=\"#vasca.tables_dict.dd_vasca_columns\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.dd_vasca_columns\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">dd_vasca_columns</span></span><em class=\"property\"><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a><span class=\"p\"><span class=\"pre\">[</span></span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a><span class=\"p\"><span class=\"pre\">[</span></span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/functions.html#float\" title=\"(in Python v3.13)\"><span class=\"pre\">float</span></a><span class=\"p\"><span class=\"pre\">]</span></span><span class=\"p\"><span class=\"pre\">]</span></span></em><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Definitions of all columns that are regisitered to be used in VASCA.</p><p>Each coulmn definition consists of five required parameters:</p><p>Users may add column items here if required for instrument-specific field classes.</p></dd>", "a[href=\"#vasca.tables_dict.region\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.region\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">region</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Definitions of tables and columns for the <a class=\"reference internal\" href=\"vasca.region.html#vasca.region.Region\" title=\"vasca.region.Region\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Region</span></code></a> class.</p></dd>", "a[href=\"#module-contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Module Contents<a class=\"headerlink\" href=\"#module-contents\" title=\"Link to this heading\">\u00b6</a></h2><h3>Data<a class=\"headerlink\" href=\"#data\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"vasca.field.html#vasca.field.GALEXField\"]": "<dt class=\"sig sig-object py\" id=\"vasca.field.GALEXField\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.field.</span></span><span class=\"sig-name descname\"><span class=\"pre\">GALEXField</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_id</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_filter</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data_path</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">visits_data_path</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/field.html#GALEXField\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"#vasca.field.BaseField\" title=\"vasca.field.BaseField\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.field.BaseField</span></code></a></p><p>Instance of one GALEX field</p><p class=\"rubric\">Initialization</p><p>Initializes a new GALEXField instance with\nskeleton VASCA data structure.</p></dd>", "a[href=\"#vasca.tables_dict.base_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.base_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">base_field</span></span><em class=\"property\"><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a><span class=\"p\"><span class=\"pre\">[</span></span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a><span class=\"p\"><span class=\"pre\">]</span></span></em><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Definitions of tables and columns for the <a class=\"reference internal\" href=\"vasca.field.html#vasca.field.BaseField\" title=\"vasca.field.BaseField\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">BaseField</span></code></a> class.</p></dd>", "a[href=\"vasca.region.html#vasca.region.Region\"]": "<dt class=\"sig sig-object py\" id=\"vasca.region.Region\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.region.</span></span><span class=\"sig-name descname\"><span class=\"pre\">Region</span></span></dt><dd><p>Bases: <a class=\"reference internal\" href=\"vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Defines a region in the sky as a\nlist of vasca.field objects. It provides functionality to\nloop over fields to derive source lists, etc.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html\">astropy.table.Table</a>. To see a\ndescription of each of their columns run :meth: <cite>~vasca.Regions.info</cite>.</p><p>None</p></dd>", "a[href=\"#api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">API<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">\u00b6</a></h3>"}
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
