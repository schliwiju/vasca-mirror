selector_to_html = {"a[href=\"#functions\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Functions<a class=\"headerlink\" href=\"#functions\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.vasca_pipe.run_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run_field</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_nr</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">field_id</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">rg</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vasca_cfg</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/vasca_pipe.html#run_field\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Run analysis on a single field</p></dd>", "a[href=\"#vasca.vasca_pipe.run_field_docs\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run_field_docs\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run_field_docs</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">obs_nr</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/functions.html#int\" title=\"(in Python v3.13)\"><span class=\"pre\">int</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">field_id</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#str\" title=\"(in Python v3.13)\"><span class=\"pre\">str</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">rg</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference internal\" href=\"vasca.region.html#vasca.region.Region\" title=\"vasca.region.Region\"><span class=\"pre\">vasca.region.Region</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vasca_cfg</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><a class=\"reference internal\" href=\"vasca.field.html#vasca.field.BaseField\" title=\"vasca.field.BaseField\"><span class=\"pre\">vasca.field.BaseField</span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://docs.python.org/3/library/constants.html#None\" title=\"(in Python v3.13)\"><span class=\"pre\">None</span></a></span></span><a class=\"reference internal\" href=\"../../_modules/vasca/vasca_pipe.html#run_field_docs\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Run field-level analysis (docs-version)</p></dd>", "a[href=\"vasca.region.html#vasca.region.Region\"]": "<dt class=\"sig sig-object py\" id=\"vasca.region.Region\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.region.</span></span><span class=\"sig-name descname\"><span class=\"pre\">Region</span></span><a class=\"reference internal\" href=\"../../_modules/vasca/region.html#Region\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Defines a region in the sky as a\nlist of vasca.field objects. It provides functionality to\nloop over fields to derive source lists, etc.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html\">astropy.table.Table</a>. To see a\ndescription of each of their columns run :meth: <cite>~vasca.Regions.info</cite>.</p><p>None</p></dd>", "a[href=\"#module-contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Module Contents<a class=\"headerlink\" href=\"#module-contents\" title=\"Link to this heading\">\u00b6</a></h2><h3>Functions<a class=\"headerlink\" href=\"#functions\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.vasca_pipe.run_cluster_fields\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run_cluster_fields\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run_cluster_fields</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">meanshift_cfg</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">tt_fd_src</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">tt_fd_det</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">cluster_coadd</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/vasca_pipe.html#run_cluster_fields\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Helper function to do clustering for passed sources or detections.\nThe main purpose is to only keep the needed tables, to save memory usage</p></dd>", "a[href=\"#vasca.vasca_pipe.keep_base_field\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.keep_base_field\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">keep_base_field</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">field</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/vasca_pipe.html#keep_base_field\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Remove field data that is not needed for further analysis to save memory</p><p>None</p></dd>", "a[href=\"#vasca.vasca_pipe.run_from_file\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run_from_file\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run_from_file</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/vasca_pipe.html#run_from_file\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Run VASCA pipeline from a configuration file passed with the ArgumentParser</p><p>None</p></dd>", "a[href=\"#api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">API<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.vasca_pipe.set_pipe_dir\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.set_pipe_dir\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">set_pipe_dir</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vasca_cfg</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/stdtypes.html#dict\" title=\"(in Python v3.13)\"><span class=\"pre\">dict</span></a></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/pathlib.html#pathlib.Path\" title=\"(in Python v3.13)\"><span class=\"pre\">pathlib.Path</span></a></span></span><a class=\"reference internal\" href=\"../../_modules/vasca/vasca_pipe.html#set_pipe_dir\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Creates the pipeline output directory and necessary parent directories.</p></dd>", "a[href=\"#vasca.vasca_pipe.run\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.run\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">run</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vasca_cfg</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/vasca_pipe.html#run\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Runs the VASCA pipeline</p><p>None</p></dd>", "a[href=\"#module-vasca.vasca_pipe\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.vasca_pipe\" title=\"vasca.vasca_pipe\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.vasca_pipe</span></code></a><a class=\"headerlink\" href=\"#module-vasca.vasca_pipe\" title=\"Link to this heading\">\u00b6</a></h1><p>Script that runs the VASCA pipeline.</p>", "a[href=\"vasca.field.html#vasca.field.BaseField\"]": "<dt class=\"sig sig-object py\" id=\"vasca.field.BaseField\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.field.</span></span><span class=\"sig-name descname\"><span class=\"pre\">BaseField</span></span><a class=\"reference internal\" href=\"../../_modules/vasca/field.html#BaseField\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Class that defines the basic\ndata structure for field-based analysis. One <em>field</em> is generally\nthe area in the sky covered by a telescope in one observation.\nA field is generally composed of several <em>visits</em> of the telescope\nat different times.</p><p>This class contains the main functionality for source\ndetection and drawing. To be inherited by field analysis classes,\nwhich can then be tailored to the needs of the observatories supported\nby the VASCA pipeline.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html\">astropy.table.Table</a>. To see a\ndescription of each of their columns run :meth: <cite>~vasca.field.BaseField.info</cite>.</p><p>None</p></dd>", "a[href=\"#vasca.vasca_pipe.set_logger\"]": "<dt class=\"sig sig-object py\" id=\"vasca.vasca_pipe.set_logger\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.vasca_pipe.</span></span><span class=\"sig-name descname\"><span class=\"pre\">set_logger</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vasca_cfg</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/vasca_pipe.html#set_logger\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Setup logger. Gets configuration from global config variable set with get_config.</p><p>None</p></dd>"}
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