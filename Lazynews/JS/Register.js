

document.addEventListener('DOMContentLoaded', () => {
  const registerBtn = document.getElementById('register-btn');

  registerBtn.addEventListener('click', () => {
    
    const name = document.getElementById('nameRegister').value;
    const email = document.getElementById('emailRegister').value;
    const password = document.getElementById('passwordRegister').value;

    
    const registrationData = {
      name: name,
      email: email,
      password: password
    };

    
    fetch('http://localhost:3001/auth/register', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(registrationData) 
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error registering. Please check your data and try again.');
        }
        return response.json(); 
      })
      .then(data => {
        console.log('Registration successful:', data);
        
        window.location.href = 'index.html';
      })
      .catch(error => {
        console.error('Error:', error);
        
      });
  });
});


