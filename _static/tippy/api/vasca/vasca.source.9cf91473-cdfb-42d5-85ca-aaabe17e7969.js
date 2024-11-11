selector_to_html = {"a[href=\"vasca.tables.html#vasca.tables.TableCollection\"]": "<dt class=\"sig sig-object py\" id=\"vasca.tables.TableCollection\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.tables.</span></span><span class=\"sig-name descname\"><span class=\"pre\">TableCollection</span></span><a class=\"reference internal\" href=\"../../_modules/vasca/tables.html#TableCollection\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Collection of <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html#astropy.table.Table\" title=\"(in Astropy v6.1)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Table</span></code></a> objects. Base calss for data storage\nclasses in VASCA.</p><p class=\"rubric\">Initialization</p></dd>", "a[href=\"#vasca.source.Source\"]": "<dt class=\"sig sig-object py\" id=\"vasca.source.Source\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.source.</span></span><span class=\"sig-name descname\"><span class=\"pre\">Source</span></span><a class=\"reference internal\" href=\"../../_modules/vasca/source.html#Source\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Bases: <a class=\"reference internal\" href=\"vasca.tables.html#vasca.tables.TableCollection\" title=\"vasca.tables.TableCollection\"><code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">vasca.tables.TableCollection</span></code></a></p><p>Class to store all VASCA information for one particular\nsource. This class is for convenience, the same data is also found in the Field\nand Region classes containing this source.</p><p class=\"rubric\">Initialization</p><p>Many class attributes are stored in <a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.table.Table.html#astropy.table.Table\" title=\"(in Astropy v6.1)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Table</span></code></a>.</p></dd>", "a[href=\"vasca.utils.html#vasca.utils.query_vizier_sed\"]": "<dt class=\"sig sig-object py\" id=\"vasca.utils.query_vizier_sed\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.utils.</span></span><span class=\"sig-name descname\"><span class=\"pre\">query_vizier_sed</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">ra</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">dec</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">radius</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">1.0</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/utils.html#query_vizier_sed\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Query VizieR Photometry tool around a given position.</p><p>The VizieR photometry tool is here\n.. url:: <a class=\"reference external\" href=\"http://vizier.u-strasbg.fr/vizier/sed/doc/\">http://vizier.u-strasbg.fr/vizier/sed/doc/</a></p></dd>", "a[href=\"#vasca.source.Source.add_gphoton_lc\"]": "<dt class=\"sig sig-object py\" id=\"vasca.source.Source.add_gphoton_lc\">\n<span class=\"sig-name descname\"><span class=\"pre\">add_gphoton_lc</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">s2n_min</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/functions.html#float\" title=\"(in Python v3.13)\"><span class=\"pre\">float</span></a></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">3.0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">tbin</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/functions.html#int\" title=\"(in Python v3.13)\"><span class=\"pre\">int</span></a></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">-1</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/constants.html#None\" title=\"(in Python v3.13)\"><span class=\"pre\">None</span></a></span></span><a class=\"reference internal\" href=\"../../_modules/vasca/source.html#Source.add_gphoton_lc\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Add light curve from gPhoton. Only include points with no flags.\nAssumes gPhoton flux is given for a 6 arcsec aperture.</p></dd>", "a[href=\"#module-contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Module Contents<a class=\"headerlink\" href=\"#module-contents\" title=\"Link to this heading\">\u00b6</a></h2><h3>Classes<a class=\"headerlink\" href=\"#classes\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#data\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Data<a class=\"headerlink\" href=\"#data\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#module-vasca.source\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.source\" title=\"vasca.source\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.source</span></code></a><a class=\"headerlink\" href=\"#module-vasca.source\" title=\"Link to this heading\">\u00b6</a></h1><p>Created on Thu Jan 19 10:17:54 2023</p><p>@author: buehler</p>", "a[href=\"#api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">API<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.source.Source.add_spectrum\"]": "<dt class=\"sig sig-object py\" id=\"vasca.source.Source.add_spectrum\">\n<span class=\"sig-name descname\"><span class=\"pre\">add_spectrum</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">search_radius</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.units.Quantity.html#astropy.units.Quantity\" title=\"(in Astropy v6.1)\"><span class=\"pre\">astropy.units.Quantity</span></a></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">2</span> <span class=\"pre\">*</span> <span class=\"pre\">uu.arcsec</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/constants.html#None\" title=\"(in Python v3.13)\"><span class=\"pre\">None</span></a></span></span><a class=\"reference internal\" href=\"../../_modules/vasca/source.html#Source.add_spectrum\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Get spectrum from SDSS, if available</p></dd>", "a[href=\"#vasca.source.rm\"]": "<dt class=\"sig sig-object py\" id=\"vasca.source.rm\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.source.</span></span><span class=\"sig-name descname\"><span class=\"pre\">rm</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">'ResourceManager(...)'</span></em></dt><dd></dd>", "a[href=\"#vasca.source.Source.add_vizier_SED\"]": "<dt class=\"sig sig-object py\" id=\"vasca.source.Source.add_vizier_SED\">\n<span class=\"sig-name descname\"><span class=\"pre\">add_vizier_SED</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">vizier_radius</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://docs.astropy.org/en/stable/api/astropy.units.Quantity.html#astropy.units.Quantity\" title=\"(in Astropy v6.1)\"><span class=\"pre\">astropy.units.Quantity</span></a></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">1</span> <span class=\"pre\">*</span> <span class=\"pre\">uu.arcsec</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><a class=\"reference external\" href=\"https://docs.python.org/3/library/constants.html#None\" title=\"(in Python v3.13)\"><span class=\"pre\">None</span></a></span></span><a class=\"reference internal\" href=\"../../_modules/vasca/source.html#Source.add_vizier_SED\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Add spectral energy distribution table (tt_sed) with all\nspectral points from VizieR within given radius. Uses\n<a class=\"reference internal\" href=\"vasca.utils.html#vasca.utils.query_vizier_sed\" title=\"vasca.utils.query_vizier_sed\"><code class=\"xref py py-func docutils literal notranslate\"><span class=\"pre\">query_vizier_sed()</span></code></a></p></dd>", "a[href=\"#classes\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Classes<a class=\"headerlink\" href=\"#classes\" title=\"Link to this heading\">\u00b6</a></h3>"}
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
