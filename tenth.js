let userScore = 0;
let compScore = 0;

const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");

const getComputerChoice = ()=>{
    const options =["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);  
    //built in function used to generate numbers from 0 to 2 as it multiplied by 3
    return options[randomIdx];
}

const drawGame =()=>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win!  Your ${userChoice} beats ${computerChoice} `;
        msg.style.backgroundColor = "green";
    }
   
    else{
        compScore++;
        computerScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText= `You Lose! ${computerChoice } beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
}

const playGame = (userChoice)=>{
    console.log("User Choice = ", userChoice)
// Generate Computer Choice 
    const computerChoice = getComputerChoice();
    console.log("Computer Choice = ",computerChoice);
    if(userChoice == computerChoice){
        //new Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            // computer choice might be scissors or paper
            userWin = computerChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
             // computer choice might be scissors or paper
             userWin = computerChoice == "scissors" ? false : true;
        }
        else{
            // computer choice might be rock or paper
            userWin = computerChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      console.log("Choice was clicked", userChoice);
      playGame(userChoice);
    });
  });