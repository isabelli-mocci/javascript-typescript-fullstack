export function setupThemeToggle(toggleId = 'toggle-theme') {
  const themeToggle = document.getElementById(toggleId);
  const body = document.body;

  if (!themeToggle) return;

  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.checked = true;
      themeToggle.setAttribute('aria-label', 'Ativar tema claro');
    } else {
      body.classList.remove('dark-mode');
      themeToggle.checked = false;
      themeToggle.setAttribute('aria-label', 'Ativar tema escuro');
    }
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  themeToggle.addEventListener('change', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}
