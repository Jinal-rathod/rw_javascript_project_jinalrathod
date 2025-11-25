const output = document.getElementById("output");

// GET REQUEST
document.getElementById("getBtn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
        .then(data => {
            output.innerHTML = `
                <h3>GET REQUEST</h3>
                <p><b>Title:</b>${data.title}</p>
                <p><b>Body:</b>${data.body}</p>
            `;
        })
        .catch(err => output.innerHTML = "Error fetching data!")
});

// POST REQUEST
document.getElementById("postBtn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: "Ravindra New Post",
            body: "This post was created using Fetch API (POST method)!",
            userId: 1
        })
    })
        .then(res => res.json())
        .then(data => {
            output.innerHTML = `
            <h3>POST REQUEST</h3>
            <p><b>New Post Created!</b></p>
            <p><b>ID:</b>${data.id}</p>
            <p><b>Title:</b>${data.title}</p>
        `;
        })
        .catch(err => output.innerHTML = "Error Creating post!");
});

// PUT REQUEST
document.getElementById("putBtn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Updated Post Title",
            body: "This content has been updated usign PUT method!",
            userId: 1
        })
    })
        .then(res => res.json())
        .then(data => {
            output.innerHTML = `
            <h3>PUT REQUEST (Update)</h3>
            <p><b>Title:</b>${data.title}</p>
            <p><b>Body:</b>${data.body}</p>
        `;
        })
        .catch(err => output.innerHTML = "Error updating post!");
});

// DELETE REQUEST
document.getElementById("deleteBtn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    })
        .then(() => {
            output.innerHTML = `
            <h3>DELETE Request</h3>
            <p>Post deleted successfully (Fake API doesn't really delete it)</p>
        `;
        })
        .catch(err => output.innerHTML = "Error deleting post!");
});