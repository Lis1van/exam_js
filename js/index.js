document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const container = document.getElementById('users-container');
            users.forEach(user => {
                const userBlock = document.createElement('div');
                userBlock.classList.add('user-block');
                userBlock.innerHTML = `
                    <p>ID: ${user.id}</p>
                    <p>Name: ${user.name}</p>
                    <a href="user-details.html?id=${user.id}">View Details</a>
                `;
                container.appendChild(userBlock);
            });
        });
});