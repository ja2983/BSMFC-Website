document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-menu button');
  const sections = document.querySelectorAll('.sponsor-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Show or hide each section
      sections.forEach(sec => {
        sec.style.display = (filter === 'all' || sec.id === filter) ? '' : 'none';
      });

      // Update active state on buttons
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});