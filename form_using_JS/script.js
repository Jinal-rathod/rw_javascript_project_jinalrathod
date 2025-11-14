// AJAX XMLHttpRequest() method (old method)

// function loadData(){
//     const http = new XMLHttpRequest()

//     http.onload = function(){
//         document.getElementById('demo').innerHTML = this.responseText
//     }

//     http.open('GET', 'http://localhost:3000/recipes', true)
//     http.send()
// }

// AJAX Fetch() method (new method)

// async function loadData() {
//   const res = await fetch("http://localhost:3000/recipes");
//   const data = await res.json();
//   console.log(data);

//   data.map((p) => {
//     document.getElementById("demo").innerHTML = `<p>${p.title}</p>`;
//   });
// }
