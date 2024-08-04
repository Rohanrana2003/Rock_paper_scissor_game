let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll("#choice");
const msg = document.querySelector(".move");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const draw = () =>{
    console.log("Match draw");
    msg.innerText = "Game was drawn, Please try again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =  `You Loose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) =>{
    console.log("Userchoice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("CompChoice = ", compChoice);

    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }
        else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("class")
        playGame(userChoice);
    })
})