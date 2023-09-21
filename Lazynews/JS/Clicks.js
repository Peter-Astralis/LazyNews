console.log('Clicks.js is running');

function loadPage(pageURL) {
  window.location.href = pageURL;
}

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); 
    const pageToLoad = this.getAttribute('href'); 
    loadPage(pageToLoad); 
  });
});

function scaleButton() { 
  const button = document.getElementById('cadastro-btn');
  button.style.transform = 'scale(1.1)';
}
function resetButton() {
  const button = document.getElementById('cadastro-btn');
  button.style.transform = 'scale(1)'; 
}
function escalaBotaoCadastro() {
  const button = document.getElementById('cadastro-btn');
  button.style.transform = 'scale(1.1)';
}

function exibirMenu() {
  const menuText = document.querySelector('.menu-text');
  menuText.style.display = 'block';
}

function ocultarMenu() {
  const menuText = document.querySelector('.menu-text');
  menuText.style.display = 'none';
}



function redirectToLogin() {
  window.location.href = "Login.html";
}

const cadastroButton = document.querySelector('.logo-btn'); 
cadastroButton.addEventListener('mouseover', scaleButton); 
cadastroButton.addEventListener('mouseleave', resetButton);
cadastroButton.addEventListener('click', redirectToLogin);

