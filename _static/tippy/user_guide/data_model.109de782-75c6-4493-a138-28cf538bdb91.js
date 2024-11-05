selector_to_html = {"a[href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.galex_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.galex_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">galex_field</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Extension of the <cite>base_field</cite> definitions for the <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.GALEXField\" title=\"vasca.field.GALEXField\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">GALEXField</span></code></a> class</p></dd>", "a[href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection.add_table\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables.TableCollection.add_table\">\n<span class=\"sig-name descname\"><span class=\"pre\">add_table</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#list\" title=\"(in Python v3.13)\"><span class=\"pre\">list</span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray\" title=\"(in NumPy v2.1)\"><span class=\"pre\">numpy.ndarray</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">template_name</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/constants.html#None\" title=\"(in Python v3.13)\"><span class=\"pre\">None</span></a></span></span><a class=\"reference internal\" href=\"../_modules/vasca/tables.html#TableCollection.add_table\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Add a VASCA table to the colection</p></dd>", "a[href=\"../api/vasca/vasca.field.html#vasca.field.BaseField\"]": "<dt class=\"sig sig-object py\" id=\"vasca.field.BaseField\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.field.</span></span><span class=\"sig-name descname\"><span class=\"pre\">BaseField</span></span><a class=\"reference internal\" href=\"../_modules/vasca/field.html#BaseField\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Class that defines the basic\ndata structure for field-based analysis. One <em>field</em> is generally\nthe area in the sky covered by a telescope in one observation.\nA field is generally composed of several <em>visits</em> of the telescope\nat different times.</p><p>This class contains the main functionality for source\ndetection and drawing. To be inherited by field analysis classes,\nwhich can then be tailored to the needs of the observatories supported\nby the VASCA pipeline.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html\">astropy.table.Table</a>. To see a\ndescription of each of their columns run :meth: <cite>~vasca.field.BaseField.info</cite>.</p><p>None</p></dd>", "a[href=\"#data-model\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Data Model<a class=\"headerlink\" href=\"#data-model\" title=\"Link to this heading\">\u00b6</a></h1><p>VASCA uses a hierarchical data model which wich defines cosmic <em>sources</em>, individual\n<em>fields</em> and whole <em>regions</em> in the celestial sky.</p>", "a[href=\"#data-structures\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Data Structures<a class=\"headerlink\" href=\"#data-structures\" title=\"Link to this heading\">\u00b6</a></h2><p>All data structures in VASCA are based on <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">TableCollection</span></code></a>. As the name suggests\nthese objects describe a collection of astropy (inv:astropy:std:doc#*.Table) objects. A\ngeneral API is provided to <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection.add_table\" title=\"vasca.tables.TableCollection.add_table\"><span class=\"xref myst py py-meth\">add</span></a> and <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection.remove_tables\" title=\"vasca.tables.TableCollection.remove_tables\"><span class=\"xref myst py py-meth\">remove</span></a> tables to and\nfrom these objects. This is used when, for instance, an individual VASCA <a class=\"reference internal\" href=\"../api/vasca/vasca.source.html#vasca.source.Source\" title=\"vasca.source.Source\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">Source</span></code></a> is\nextracted out of a <a class=\"reference internal\" href=\"../api/vasca/vasca.region.html#vasca.region.Region\" title=\"vasca.region.Region\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">Region</span></code></a>.</p>", "a[href=\"#vasca-tables\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">VASCA Tables<a class=\"headerlink\" href=\"#vasca-tables\" title=\"Link to this heading\">\u00b6</a></h3><p>Below is a short description of the most important tables that are used in VASCA:</p>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"bg-primary mb-1 reference internal image-reference\" href=\"../_images/VASCA_data_model_v2.jpg\"><img alt=\"data_model\" class=\"bg-primary mb-1\" src=\"../_images/VASCA_data_model_v2.jpg\" style=\"width: 600px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">The VASCA data model.</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">\u00b6</a></p>\n</figcaption>\n</figure>", "a[href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.base_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.base_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">base_field</span></span><em class=\"property\"><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a><span class=\"p\"><span class=\"pre\">[</span></span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a><span class=\"p\"><span class=\"pre\">]</span></span></em><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Definitions of tables and columns for the <a class=\"reference internal\" href=\"../api/vasca/vasca.field.html#vasca.field.BaseField\" title=\"vasca.field.BaseField\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">BaseField</span></code></a> class.</p></dd>", "a[href=\"../api/vasca/vasca.field.html#vasca.field.GALEXField\"]": "<dt class=\"sig sig-object py\" id=\"vasca.field.GALEXField\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.field.</span></span><span class=\"sig-name descname\"><span class=\"pre\">GALEXField</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_id</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_filter</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data_path</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">visits_data_path</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/field.html#GALEXField\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"#vasca.field.BaseField\" title=\"vasca.field.BaseField\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.field.BaseField</span></code></a></p><p>Instance of one GALEX field</p><p class=\"rubric\">Initialization</p><p>Initializes a new GALEXField instance with\nskeleton VASCA data structure.</p></dd>", "a[href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection.remove_tables\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables.TableCollection.remove_tables\">\n<span class=\"sig-name descname\"><span class=\"pre\">remove_tables</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">ll_table_names</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#list\" title=\"(in Python v3.13)\"><span class=\"pre\">list</span></a><span class=\"p\"><span class=\"pre\">[</span></span><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a><span class=\"p\"><span class=\"pre\">]</span></span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/constants.html#None\" title=\"(in Python v3.13)\"><span class=\"pre\">None</span></a></span></span><a class=\"reference internal\" href=\"../_modules/vasca/tables.html#TableCollection.remove_tables\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Removes table from collection</p></dd>", "a[href=\"#input-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Input Data<a class=\"headerlink\" href=\"#input-data\" title=\"Link to this heading\">\u00b6</a></h2><p>Typically, astronomical photometric surveys observe the sky by segmenting it into fields\nwhich correspond to the field of view as defined by the instrument\u2019s telescope optics. A\nfield is then defined by a central coordinate and the diameter of the field of view.</p><p>VASCA relies as its input on the science data products that missions/organizations create\nfrom their observational raw data. Specifically this means VASCA takes tables of\nphotometric detections that have a field and visit ID. A reference of the full list\nof required columns can be found below <a class=\"reference internal\" href=\"#vasca-columns\"><span class=\"std std-ref\">VASCA Columns</span></a> or in the API reference:\n<a class=\"reference internal\" href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.base_field\" title=\"vasca.tables_dict.base_field\"><span class=\"xref myst py py-data\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">BaseField</span></code></span></a>, <a class=\"reference internal\" href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.region\" title=\"vasca.tables_dict.region\"><span class=\"xref myst py py-data\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Region</span></code></span></a>.</p>", "a[href=\"../api/vasca/vasca.tables_dict.html#vasca.tables_dict.region\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables_dict.region\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables_dict.</span></span><span class=\"sig-name descname\"><span class=\"pre\">region</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Definitions of tables and columns for the <a class=\"reference internal\" href=\"../api/vasca/vasca.region.html#vasca.region.Region\" title=\"vasca.region.Region\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Region</span></code></a> class.</p></dd>", "a[href=\"../api/vasca/vasca.source.html#vasca.source.Source\"]": "<dt class=\"sig sig-object py\" id=\"vasca.source.Source\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.source.</span></span><span class=\"sig-name descname\"><span class=\"pre\">Source</span></span><a class=\"reference internal\" href=\"../_modules/vasca/source.html#Source\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Class to store all VASCA information for one particular\nsource. This class is for convenience, the same data is also found in the Field\nand Region classes containing this source.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html#astropy.table.Table\" title=\"(in Astropy v6.1)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Table</span></code></a>.</p></dd>", "a[href=\"#vasca-columns\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">VASCA Columns<a class=\"headerlink\" href=\"#vasca-columns\" title=\"Link to this heading\">\u00b6</a></h3><p>See the full list of data columns defined by VASCA below:</p>", "a[href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables.TableCollection\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables.</span></span><span class=\"sig-name descname\"><span class=\"pre\">TableCollection</span></span><a class=\"reference internal\" href=\"../_modules/vasca/tables.html#TableCollection\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Collection of <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html#astropy.table.Table\" title=\"(in Astropy v6.1)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Table</span></code></a> objects. Base calss for data storage\nclasses in VASCA.</p><p class=\"rubric\">Initialization</p></dd>", "a[href=\"../api/vasca/vasca.field.html#vasca.field.BaseField.load_sky_map\"]": "<dt class=\"sig sig-object py\" id=\"vasca.field.BaseField.load_sky_map\">\n<span class=\"sig-name descname\"><span class=\"pre\">load_sky_map</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">file_name</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">img_attr</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">'ref_img'</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/field.html#BaseField.load_sky_map\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Load reference image and WCS from passed fits file</p><p>None</p></dd>", "a[href=\"../api/vasca/vasca.region.html#vasca.region.Region\"]": "<dt class=\"sig sig-object py\" id=\"vasca.region.Region\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.region.</span></span><span class=\"sig-name descname\"><span class=\"pre\">Region</span></span><a class=\"reference internal\" href=\"../_modules/vasca/region.html#Region\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"../api/vasca/vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Defines a region in the sky as a\nlist of vasca.field objects. It provides functionality to\nloop over fields to derive source lists, etc.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html\">astropy.table.Table</a>. To see a\ndescription of each of their columns run :meth: <cite>~vasca.Regions.info</cite>.</p><p>None</p></dd>"}
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
