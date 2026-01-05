// Shared header component for NERD site
(function() {
  const currentPath = window.location.pathname;
  
  const isActive = (path) => {
    if (path === '/docs' && currentPath.startsWith('/docs')) return true;
    return currentPath === path || currentPath === path + '.html';
  };

  const header = `
  <div class="site-banner">
    🤖 Train your LLM with <a href="/llms.txt"><code>llms.txt</code></a> - use it in Cursor, Claude Code, or any AI tool
  </div>
  <nav>
    <div class="container">
      <a href="/" class="logo">NERD</a>
      <ul>
        <li><a href="/about"${isActive('/about') ? ' class="active"' : ''}>Story</a></li>
        <li><a href="/docs"${isActive('/docs') ? ' class="active"' : ''}>Docs</a></li>
        <li><a href="/recipes"${isActive('/recipes') ? ' class="active"' : ''}>Recipes</a></li>
        <li><a href="/team"${isActive('/team') ? ' class="active"' : ''}>Authors</a></li>
        <li>
          <a href="https://github.com/Nerd-Lang/nerd-lang-core" class="github-link" target="_blank">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </li>
        <li class="github-star">
          <iframe src="https://ghbtns.com/github-btn.html?user=Nerd-Lang&repo=nerd-lang-core&type=star&count=true" frameborder="0" scrolling="0" width="100" height="20" title="Star NERD on GitHub"></iframe>
        </li>
      </ul>
    </div>
  </nav>`;

  // Insert header at the start of body
  document.body.insertAdjacentHTML('afterbegin', header);
})();

