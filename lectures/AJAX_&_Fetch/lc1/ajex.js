const button = document.getElementById("btn");
const result = document.getElementById("loaddata");

button.addEventListener("click", function () {
  const http = new XMLHttpRequest();

  http.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  http.onload = function () {
    if (http.status === 200) {
      const comments = JSON.parse(http.responseText);
      result.innerHTML = `<p><b>Title:</b> ${comments[0].title}</p> 
                                <p><b>Comment:</b> ${comments[0].body}</p>`;
    } else {
      result.innerHTML = "Error: Data Not Found";
    }
  };

  http.send();
});
