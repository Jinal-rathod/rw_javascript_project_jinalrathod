{
  // Option : 1 Guessing a Number (HTML + Javascript)

  let secretNumber = Math.floor(Math.random() * 100) + 1;

  console.log(secretNumber);

  let attempt = 0;

  function GuessNumber() {
    let GuessNumUser = document.getElementById("guess").value;

    attempt++;

    if (GuessNumUser == secretNumber) {
      document.getElementById("message").innerHTML =
        "😎Congratulation You are Guess right number💐";
      document.getElementById("attempts").innerHTML = "Attempst : " + attempt;
    } else if (GuessNumUser > secretNumber) {
      document.getElementById("message").innerHTML =
        "Guess Higher Number ! Try again.";
    } else {
      document.getElementById("message").innerHTML =
        "Guess Smaller Number ! Try again.";
    }
  }

  // Option : 2 Using Javascript Rock-Paper-Scissore

  let score = 0;
  let computerScore = 0;

  const gameplay = (choice) => {
    let choices = ["rock", "paper", "scissore"];

    let computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);

    let result = "Your chioce" + choice + "Computer choice" + computerChoice;

    if (choice === computerChoice) {
      console.log("It's a Draw!!!");
    } else if (
      (choice === "rock" && computerChoice === "scissore") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissore" && computerChoice === "paper")
    ) {
      result += "you win";
      score++;
    } else {
      result += "computer win";
      computerScore++;
    }

    document.getElementById("gameresult").innerHTML = result;

    document.getElementById("score").innerHTML =
      "score you" + score + "computer score" + computerScore;
  };
}
