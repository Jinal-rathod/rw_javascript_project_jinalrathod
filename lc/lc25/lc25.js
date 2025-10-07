{
    let content = document.getElementById("mainHead")

    console.log(content);

    content.style.backgroundColor = "purple"

    let classContent = document.getElementsByClassName("head")[2]

    console.log(classContent);

    classContent.style.backgroundColor = "black"
    classContent.style.color = "black"
    classContent.style.border = "5px solid red"
}