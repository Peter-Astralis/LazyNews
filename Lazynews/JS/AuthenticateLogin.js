function loginBTN() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  const loginData = {
    email: email,
    password: password
  };

  fetch('http://localhost:3001/auth/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials and try again.');
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('token', data.token); 

      console.log('Login successful:', data);
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-button');
  if (submitButton) {
    submitButton.addEventListener('click', function (event) {
      event.preventDefault(); 
      loginBTN(); 
    });
  }
});
