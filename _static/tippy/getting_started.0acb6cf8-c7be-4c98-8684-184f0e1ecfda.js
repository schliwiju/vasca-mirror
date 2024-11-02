selector_to_html = {"a[href=\"#resource-management\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Resource management<a class=\"headerlink\" href=\"#resource-management\" title=\"Link to this heading\">\u00b6</a></h2><p>Management of the input observational data is handled in VASCA via the\n<a class=\"reference internal\" href=\"api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\" title=\"vasca.resource_manager.ResourceManager\"><code class=\"xref myst py py-class docutils literal notranslate\"><span class=\"pre\">ResourceManager</span></code></a> class. Before first use, users need to edit environment variables\nthat specify the data storage locations in an <code class=\"docutils literal notranslate\"><span class=\"pre\">.env</span></code> file in VASCA\u2019s root directory.</p>", "a[href=\"user_guide/configuration.html#configuration\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configuration<a class=\"headerlink\" href=\"#configuration\" title=\"Link to this heading\">\u00b6</a></h1><p>VASCA\u2019s pipeline can be configured using yaml files. See <a class=\"reference external\" href=\"https://github.com/rbuehler/vasca/blob/main/vasca/vasca_cfg.yaml\"><code class=\"docutils literal notranslate\"><span class=\"pre\">vasca/vasca_cfg.yml</span></code></a>\nas an example:</p>", "a[href=\"#coding-guidelines\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Coding guidelines<a class=\"headerlink\" href=\"#coding-guidelines\" title=\"Link to this heading\">\u00b6</a></h2><p>We use the <a class=\"reference external\" href=\"https://realpython.com/python-pep8/\">PEP 8</a> coding conventions. Before\ncontributing, please consider the use of automatic code formatting tools. We recommend <a class=\"reference external\" href=\"https://docs.astral.sh/ruff/\"><code class=\"docutils literal notranslate\"><span class=\"pre\">ruff</span></code></a>.\nIt is a one-stop-shop that combines all style rules from tools like <a class=\"reference external\" href=\"https://github.com/pycqa/isort\"><code class=\"docutils literal notranslate\"><span class=\"pre\">isort</span></code></a>,\n<a class=\"reference external\" href=\"https://github.com/PyCQA/flake8\"><code class=\"docutils literal notranslate\"><span class=\"pre\">flake8</span></code></a>, and <a class=\"reference external\" href=\"https://black.readthedocs.io/en/stable/#\"><code class=\"docutils literal notranslate\"><span class=\"pre\">black</span></code></a>.\nAll ruff configurations can be found in the <code class=\"docutils literal notranslate\"><span class=\"pre\">pyproject.toml</span></code> file. We set <a class=\"reference external\" href=\"https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html?highlight=88%20#line-length\">88 characters</a>\nas the default line width. The recommended Python version to use is 3.11. For docstrings,\nwe use the <a class=\"reference external\" href=\"https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_numpy.html\">numpy format</a>.</p>", "a[href=\"user_guide/instruments.html#supported-instruments\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Supported Instruments<a class=\"headerlink\" href=\"#supported-instruments\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"#build-the-documentation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build the documentation<a class=\"headerlink\" href=\"#build-the-documentation\" title=\"Link to this heading\">\u00b6</a></h2><p>For documentation, we use <a class=\"reference external\" href=\"https://www.sphinx-doc.org/en/master/\">Sphinx</a>. To build it\nlocally, run the following command from VASCA\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">root</span></code> directory:</p>", "a[href=\"#running-the-pipeline-and-post-processing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Running the pipeline and post-processing<a class=\"headerlink\" href=\"#running-the-pipeline-and-post-processing\" title=\"Link to this heading\">\u00b6</a></h2><p>To start the pipeline processing go into the <code class=\"docutils literal notranslate\"><span class=\"pre\">vasca</span></code> directory and start the command line\nscript:</p>", "a[href=\"#getting-started\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">\u00b6</a></h1><h2>Installation<a class=\"headerlink\" href=\"#installation\" title=\"Link to this heading\">\u00b6</a></h2><p>VASCA is tested to work with Python 3.10 and 3.11. Typically, you want to create a new\nPython environment, e.g., with <a class=\"reference external\" href=\"https://github.com/pyenv/pyenv-virtualenv\">pyenv-virtualenv</a>\nor <a class=\"reference external\" href=\"https://github.com/mamba-org/mamba\">mamba</a>:</p>", "a[href=\"api/vasca/vasca.resource_manager.html#vasca.resource_manager.ResourceManager\"]": "<dt class=\"sig sig-object py\" id=\"vasca.resource_manager.ResourceManager\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">vasca.resource_manager.</span></span><span class=\"sig-name descname\"><span class=\"pre\">ResourceManager</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">verbose</span></span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference internal\" href=\"_modules/vasca/resource_manager.html#ResourceManager\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Manages access to external resources.</p><p>Resources like catalog files or large metadata files may be stored on\nremote storage systems such as DESY Sync &amp; Share (SAS) or LUSTRE.\nUsers may synchronize these resources onto their local systems\nto perform software analysis on the data. To aid collaborative development,\nthe <cite>ResourceManager</cite> provides an interface to find the locations of resources\non the user\u2019s local system.</p><p>The implementation requires a set of environment variables. The full list\nof variables is defined in <cite>CLASSDIR/resource_metadata/resource_envs.yml</cite>.\nUsers need to make sure these variables are known to the system. This can be\nachieved in two ways. Either the user manually sets each variable via\nthe shell config file (<cite>.bashrc</cite>, <cite>zshrc</cite>, etc.) or the instance of\n<cite>ResourceManager</cite> automatically sets the variables if the config file at\n<cite>PACKAGEDIR/.env</cite> is found.</p><p class=\"rubric\">Initialization</p></dd>", "a[href=\"#installation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Installation<a class=\"headerlink\" href=\"#installation\" title=\"Link to this heading\">\u00b6</a></h2><p>VASCA is tested to work with Python 3.10 and 3.11. Typically, you want to create a new\nPython environment, e.g., with <a class=\"reference external\" href=\"https://github.com/pyenv/pyenv-virtualenv\">pyenv-virtualenv</a>\nor <a class=\"reference external\" href=\"https://github.com/mamba-org/mamba\">mamba</a>:</p>"}
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
