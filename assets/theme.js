document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const current = localStorage.getItem('theme') || 'light';
  toggle.checked = current === 'dark';
  applyTheme(current);

  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  });
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}
