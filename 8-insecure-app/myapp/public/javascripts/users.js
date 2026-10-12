document.getElementById('search-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const response = await fetch(`/search?email=${form.elements.email.value}`);

    const result = document.getElementById('result');

    if (response.redirected) {
      window.location.href = response.url;
      return;
    }
    if (response.ok) {
      const users = await response.json();
      result.textContent = JSON.stringify(users, null, 2);
    } else {
      result.textContent = 'Unauthorized';
    }
  });

