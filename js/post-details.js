document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const container = document.getElementById('post-details-container');
            const postBlock = document.createElement('div');
            postBlock.classList.add('post-details');
            postBlock.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            container.appendChild(postBlock);

            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    const commentsContainer = document.createElement('div');
                    commentsContainer.classList.add('comments-container');
                    comments.forEach(comment => {
                        const commentBlock = document.createElement('div');
                        commentBlock.classList.add('comment-block');
                        commentBlock.innerHTML = `
                            <p>Name: ${comment.name}</p>
                            <p>Email: ${comment.email}</p>
                            <p>${comment.body}</p>
                        `;
                        commentsContainer.appendChild(commentBlock);
                    });
                    container.appendChild(commentsContainer);
                });
        });
});