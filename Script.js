 function showSection(id) {
    document.querySelectorAll('.sec').forEach(s => s.classList.remove('Activate'));
    const target = document.getElementById(id);
    if (target) target.classList.add('Activate');
  }

  document.addEventListener('click', (e) => {
    const nav = e.target.closest('.nav');
    if (nav && nav.dataset.target) {
      showSection(nav.dataset.target);
    }
  });