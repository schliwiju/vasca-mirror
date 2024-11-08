selector_to_html = {"a[href=\"#vasca.resource_manager.ResourceManager.__exit__\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager.__exit__\">\n<span class=\"sig-name descname\"><span class=\"pre\">__exit__</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">exc_type</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">exc_value</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">traceback</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager.__exit__\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd></dd>", "a[href=\"#vasca.resource_manager.ResourceManager._log_env_status\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager._log_env_status\">\n<span class=\"sig-name descname\"><span class=\"pre\">_log_env_status</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager._log_env_status\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Verify and log if env vars are set.</p><p>\u2026</p></dd>", "a[href=\"#vasca.resource_manager.ResourceManager._load_env\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager._load_env\">\n<span class=\"sig-name descname\"><span class=\"pre\">_load_env</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">config_path</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">PACKAGE_DIR</span> <span class=\"pre\">+</span> <span class=\"pre\">'/.env'</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">overwrite</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager._load_env\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Verify and set the required environment variables (env vars).</p><p>\u2026</p></dd>", "a[href=\"#vasca.resource_manager.ResourceManager._check_resource_catalog\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager._check_resource_catalog\">\n<span class=\"sig-name descname\"><span class=\"pre\">_check_resource_catalog</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager._check_resource_catalog\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Dummy function atm.</p><p>Function to check the resource_catalog.yml file for consistency.\nPotential problems to look out for are:</p><p>Additionally check if cataloged files really exist</p></dd>", "a[href=\"#classes\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Classes<a class=\"headerlink\" href=\"#classes\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#module-vasca.resource_manager\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-vasca.resource_manager\" title=\"vasca.resource_manager\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">vasca.resource_manager</span></code></a><a class=\"headerlink\" href=\"#module-vasca.resource_manager\" title=\"Link to this heading\">\u00b6</a></h1><p>Resource manager for VASCA</p>", "a[href=\"#vasca.resource_manager.ResourceManager\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.resource_manager.</span></span><span class=\"sig-name descname\"><span class=\"pre\">ResourceManager</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">verbose</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Manages access to external resources.</p><p>Resources like catalog files or large metadata files may be stored on\nremote storage systems such as DESY Sync &amp; Share (SAS) or LUSTRE.\nUsers may synchronize these resources onto their local systems\nto perform software analysis on the data. To aid collaborative development,\nthe <cite>ResourceManager</cite> provides an interface to find the locations of resources\non the user\u2019s local system.</p><p>The implementation requires a set of environment variables. The full list\nof variables is defined in <cite>CLASSDIR/resource_metadata/resource_envs.yml</cite>.\nUsers need to make sure these variables are known to the system. This can be\nachieved in two ways. Either the user manually sets each variable via\nthe shell config file (<cite>.bashrc</cite>, <cite>zshrc</cite>, etc.) or the instance of\n<cite>ResourceManager</cite> automatically sets the variables if the config file at\n<cite>PACKAGEDIR/.env</cite> is found.</p><p class=\"rubric\">Initialization</p></dd>", "a[href=\"#vasca.resource_manager.ResourceManager._load_metadata\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager._load_metadata\">\n<span class=\"sig-name descname\"><span class=\"pre\">_load_metadata</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager._load_metadata\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd></dd>", "a[href=\"#data\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Data<a class=\"headerlink\" href=\"#data\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.resource_manager.ResourceManager._check_resoruce_env_info\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager._check_resoruce_env_info\">\n<span class=\"sig-name descname\"><span class=\"pre\">_check_resoruce_env_info</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager._check_resoruce_env_info\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd></dd>", "a[href=\"#module-contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Module Contents<a class=\"headerlink\" href=\"#module-contents\" title=\"Link to this heading\">\u00b6</a></h2><h3>Classes<a class=\"headerlink\" href=\"#classes\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.resource_manager.ResourceManager.get_path\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager.get_path\">\n<span class=\"sig-name descname\"><span class=\"pre\">get_path</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">resource</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">storage</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager.get_path\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Returns the local path to a given resource at the corresponding storage system.</p><p>The path is constructed from the local path to the synced remote directory\nand the resource path relative to that directory.</p><p>This method requires specific environment variables to be declared\non the users system during runtime.\nThe variable names are listed in <cite>CLASSDIR/resource_metadata/resource_envs.yml</cite>.</p></dd>", "a[href=\"#vasca.resource_manager.PACKAGE_DIR\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.PACKAGE_DIR\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.resource_manager.</span></span><span class=\"sig-name descname\"><span class=\"pre\">PACKAGE_DIR</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></em></dt><dd><p>Path to the root directory of VASCA</p></dd>", "a[href=\"#vasca.resource_manager.CLASS_DIR\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.CLASS_DIR\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.resource_manager.</span></span><span class=\"sig-name descname\"><span class=\"pre\">CLASS_DIR</span></span><em class=\"property\"><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"pre\">'dirname(...)'</span></em></dt><dd><p>Path relative to the resource manager module directory</p></dd>", "a[href=\"#api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">API<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">\u00b6</a></h3>", "a[href=\"#vasca.resource_manager.ResourceManager.__enter__\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager.__enter__\">\n<span class=\"sig-name descname\"><span class=\"pre\">__enter__</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"../../_modules/vasca/resource_manager.html#ResourceManager.__enter__\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd></dd>"}
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
