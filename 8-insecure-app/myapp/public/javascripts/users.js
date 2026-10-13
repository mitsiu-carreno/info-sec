document.getElementById('search-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const response = await fetch(`/search?email=${form.elements.email.value}`);

    const result = document.getElementById('result');

    // Detect if fetch followed a redirect
    if (response.redirected) {
      window.location.href = response.url;
      return;
    }
    if (response.ok) {
      const users = await response.json();
      //result.textContent = JSON.stringify(users, null, 2);
      result.innerHTML = `
        <table>
	  <tr>
	    <th>Id</th>
	    <th>Email</th>
	    <th>Password</th>
	  </tr>
	  ` +
          users.map(user=>`
	  <tr>
	    <td>${user.id}</td>
	    <td>${user.email}</td>
	    <td>${user.password}</td>
	  </tr>
	  `).join('');
	  + `
	</table>
      `
    } else {
      result.textContent = 'Unauthorized';
    }
  });

