function fetchUserData() {
  const userList = document.getElementById('userList');
  const errorMsg = document.getElementById('errorMsg');
  userList.innerHTML = '';
  errorMsg.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user data. Status: ' + response.status);
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(userCard);
      });
    })
    .catch(error => {
      errorMsg.textContent = 'Error: ' + error.message;
    });
}

// Fetch users on page load
window.onload = fetchUserData;￼Enter
