export function setupThemeToggle(toggleId = 'toggle-theme') {
  const themeToggle = document.getElementById(toggleId);

  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
  });
}
