document.addEventListener('DOMContentLoaded', function() {
  const passwordToggle = document.querySelector('button[aria-label="Alternar visibilidade da senha"]');
  const passwordInput = document.getElementById('password');
  const forgotLink = document.querySelector('a[href="#"][aria-label="Esqueci minha senha"]');
  
  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      passwordToggle.querySelector('span').textContent = type === 'password' ? 'visibility' : 'visibility_off';
      passwordInput.focus();
    });
  }
  
  if (forgotLink) {
    forgotLink.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Funcionalidade de recuperação de senha em desenvolvimento.');
    });
  }
  
  // Form submission demo
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Login simulado: redirecionando para dashboard...');
      window.location.href = '../sigprev_dashboard/sigprev_dashboard_fixed.html';
    });
  }
  
  // Improve mobile experience
  if (window.innerWidth < 640) {
    document.body.classList.add('mobile-optimized');
  }
  
  window.addEventListener('resize', function() {
    if (window.innerWidth < 640) {
      document.body.classList.add('mobile-optimized');
    } else {
      document.body.classList.remove('mobile-optimized');
    }
  });
});
