
function logout() {
  
  localStorage.removeItem('token');

  
  window.location.href = 'Login.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const cadastroBtn = document.getElementById('cadastro-btn');
  const menuText = document.querySelector('.menu-text');
  const menuBtn = document.getElementById('menu-btn');
  const logoutBtn = document.getElementById('logout'); 

  function isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  if (cadastroBtn && menuBtn) {
    if (isAuthenticated()) {
      cadastroBtn.style.display = 'none';
      menuBtn.style.display = 'block';
    } else {
      cadastroBtn.style.display = 'block';
      menuBtn.style.display = 'none';
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener('mouseover', () => {
      if (isAuthenticated() && menuText) {
        menuText.style.display = 'block';
      }
    });

    menuBtn.addEventListener('mouseout', () => {
      if (isAuthenticated() && menuText) {
        menuText.style.display = 'none';
      }
    });
  }

  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logout(); 
    });
  }
});


