document.getElementById('login-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const data = {
      user: {
        email: form.elements.email.value,
        password: form.elements.password.value
      }
    };

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Handle successful login
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  });


