// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Highlight today's row in the opening-hours table
  var day = new Date().getDay(); // 0 = Sunday
  document.querySelectorAll('.hours-table tr[data-day]').forEach(function (row) {
    if (parseInt(row.dataset.day, 10) === day) {
      row.style.background = 'rgba(232, 145, 45, 0.12)';
    }
  });
});
