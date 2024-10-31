selector_to_html = {"a[href=\"../api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.resource_manager.</span></span><span class=\"sig-name descname\"><span class=\"pre\">ResourceManager</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">verbose</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/resource_manager.html#ResourceManager\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Manages access to external resources.</p><p>Resources like catalog files or large metadata files may be stored on\nremote storage systems such as DESY Sync &amp; Share (SAS) or LUSTRE.\nUsers may synchronize these resources onto their local systems\nto perform software analysis on the data. To aid collaborative development,\nthe <cite>ResourceManager</cite> provides an interface to find the locations of resources\non the user\u2019s local system.</p><p>The implementation requires a set of environment variables. The full list\nof variables is defined in <cite>CLASSDIR/resource_metadata/resource_envs.yml</cite>.\nUsers need to make sure these variables are known to the system. This can be\nachieved in two ways. Either the user manually sets each variable via\nthe shell config file (<cite>.bashrc</cite>, <cite>zshrc</cite>, etc.) or the instance of\n<cite>ResourceManager</cite> automatically sets the variables if the config file at\n<cite>PACKAGEDIR/.env</cite> is found.</p><p class=\"rubric\">Initialization</p></dd>", "a[href=\"#env\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">.env</span></code><a class=\"headerlink\" href=\"#env\" title=\"Link to this heading\">\u00b6</a></h3><p>Text file located at the root directory of the package. This is read by the resource\nmanager at initialization which uses <a class=\"reference external\" href=\"https://saurabh-kumar.com/python-dotenv/\"><code class=\"docutils literal notranslate\"><span class=\"pre\">dotenv</span></code></a>\nto set the environment variables temporarily during run time. See <a class=\"reference download internal\" download=\"\" href=\"../_downloads/607c77065a7574b1630e4ec4ced8df4f/.env_template\"><span class=\"xref download myst\"><code class=\"docutils literal notranslate\"><span class=\"pre\">.env_template</span></code></span></a>\nwhen using VASCA for the first time.</p>", "a[href=\"#example\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Example<a class=\"headerlink\" href=\"#example\" title=\"Link to this heading\">\u00b6</a></h2><p>Initialize the ResourceManager and see what metadata it parsed from the config files.</p>", "a[href=\"#resource-manager\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Resource Manager<a class=\"headerlink\" href=\"#resource-manager\" title=\"Link to this heading\">\u00b6</a></h1><p>With <a class=\"reference internal\" href=\"../api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\" title=\"vasca.resource_manager.ResourceManager\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">ResourceManager</span></code></a> VASCA provides a utility that helps managing the raw input\ndata. Data volumes processed by VASCA are generally pretty large and use cases as well\nas computation and storage resources can vary. <a class=\"reference internal\" href=\"../api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\" title=\"vasca.resource_manager.ResourceManager\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">ResourceManager</span></code></a> adds an\nabstraction layer that is flexible enough to varying contexts while exposing a\nconsistent API to the rest ofVASCA\u2019s pipeline functions.</p><p>As an example, the processing of GALEX data for the proof-of-principle study was done\nby downloading raw data from <a class=\"reference external\" href=\"https://astroquery.readthedocs.io/en/latest/mast/mast.html\">MAST</a>\nto a local directory, running the pipeline on a regular office laptop. This directory\nwas then cloud-synced via DESY\u2019s NextCloud service to allow collaborative work with\nmultiple users on the same dataset.</p>", "a[href=\"../api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager.get_path\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager.get_path\">\n<span class=\"sig-name descname\"><span class=\"pre\">get_path</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">resource</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">storage</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../_modules/vasca/resource_manager.html#ResourceManager.get_path\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Returns the local path to a given resource at the corresponding storage system.</p><p>The path is constructed from the local path to the synced remote directory\nand the resource path relative to that directory.</p><p>This method requires specific environment variables to be declared\non the users system during runtime.\nThe variable names are listed in <cite>CLASSDIR/resource_metadata/resource_envs.yml</cite>.</p></dd>", "a[href=\"#resource-catalag-yml\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">resource_catalag.yml</span></code><a class=\"headerlink\" href=\"#resource-catalag-yml\" title=\"Link to this heading\">\u00b6</a></h3><p>Configuration file that associates directory or file items to specific environment\nvariables. Each item has a name, description, type, and path attribute.</p>", "a[href=\"#resource-envs-yml\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">resource_envs.yml</span></code><a class=\"headerlink\" href=\"#resource-envs-yml\" title=\"Link to this heading\">\u00b6</a></h3><p>Configuration file specifying the required environment variables and associated\nattributes like a name, a project name and a short description to help other users to\nunderstand what variable is used for.</p>", "a[href=\"#configuration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Configuration<a class=\"headerlink\" href=\"#configuration\" title=\"Link to this heading\">\u00b6</a></h2><p>Configuration files are used to specify file locations, environment variables and even\nspecific data products that are relevant for the processing of a specific instrument\u2019s\nraw data. These can be freely edited by users to include data locations items as the\nuse case requires. <a class=\"reference internal\" href=\"../api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\" title=\"vasca.resource_manager.ResourceManager\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">ResourceManager</span></code></a> has the necessary consistency checks to warn\nif any miss-configuration has happened. So try it out!</p>"}
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
