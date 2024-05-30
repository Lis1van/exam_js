document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const container = document.getElementById('user-details-container');
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-details');
            userBlock.innerHTML = `
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
                <p>Company: ${user.company.name}</p>
                <button id="posts-btn">Posts of current user</button>
                <div id="posts-container"></div>
            `;
            container.appendChild(userBlock);

            document.getElementById('posts-btn').addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const postsContainer = document.getElementById('posts-container');
                        postsContainer.innerHTML = '';
                        posts.forEach(post => {
                            const postBlock = document.createElement('div');
                            postBlock.classList.add('post-block');
                            postBlock.innerHTML = `
                                <p>Title: ${post.title}</p>
                                <a href="post-details.html?id=${post.id}">View Post Details</a>
                            `;
                            postsContainer.appendChild(postBlock);
                        });
                    });
            });
        });
});