function computerPlay(){
    var stringArr = ["Rock", "Paper", "Scissor"];
    return stringArr[Math.floor(Math.random()*3)];
}
let countUser = 0;
let countComp = 0;
function game(){
    let rock;
    let scissor;
    let paper;
    var stringArr = ["Rock", "Paper", "Scissor"];
    const user = document.getElementById('userScore');
    const comp = document.getElementById('compScore');
    const wrapper = document.getElementById('buttonContainer');
    wrapper.addEventListener('click', (e) => {
        const isButton = e.target.nodeName = 'BUTTON';
        if(!isButton){
            return;
        }
        //console.log(e.target.className);
        
        if((e.target.className) == "btn rockButton" && computerPlay().toLowerCase() == "scissor"){
            countUser++;
            console.log("You Win! Rock beats Scissor");
            console.log("User " + countUser);
            console.log("Computer " + countComp);
            user.textContent = "User: " + countUser;
            comp.textContent = "Computer: " + countComp;
            
        }else if((e.target.className) == "btn rockButton" && computerPlay().toLowerCase() == "paper"){
            countComp++;
            console.log("You lose! Paper beats Rock");
            console.log("User " + countUser);
            console.log("Computer " + countComp);
            const user = document.getElementById('userScore');
            user.textContent = "User: " + countUser;
            user.textContent = "User: " + countUser;
            comp.textContent = "Computer: " + countComp;
        }
        else if((e.target.className) == "btn paperButton" && computerPlay().toLowerCase() == "rock"){
            countUser++;
            console.log("You Win! Paper beats Rock");
            console.log("User " + countUser);
            console.log("Computer " + countComp);
            user.textContent = "User: " + countUser;
            comp.textContent = "Computer: " + countComp;
        }
        else if((e.target.className) == "btn paperButton" && computerPlay().toLowerCase() == "scissor"){
            countComp++;
            console.log("You Lose! Scissor beats Paper");
            console.log("User " + countUser);
            console.log("Computer " + countComp);
            user.textContent = "User: " + countUser;
            comp.textContent = "Computer: " + countComp;
        }
        else if((e.target.className) == "btn scissorButton" && computerPlay().toLowerCase() == "rock"){
            countComp++;
            console.log("You Lose! Rock beats Scissor");
            console.log("User " + countUser);
            console.log("Computer " + countComp);
            user.textContent = "User: " + countUser;
            comp.textContent = "Computer: " + countComp;
        }
        else if((e.target.className) == "btn scissorButton" && computerPlay().toLowerCase() == "paper"){
            countUser++;
            console.log("You Win! Scissor beats Paper");
            console.log("User " + countUser);
            console.log("Computer " + countComp);
            user.textContent = "User: " + countUser;
            comp.textContent = "Computer: " + countComp;
        }
        else if((e.target.textContent) == computerPlay()){
            console.log("Draw");
            console.log("User " + countUser);
            console.log("Computer " + countComp);
            user.textContent = "User: " + countUser;
            comp.textContent = "Computer: " + countComp;
        }if(countUser >= 5){
            user.textContent = "User: Winner";
            comp.textContent = "Computer: Loser";
        }else if(countComp >= 5){
            user.textContent = "User: Loser";
            comp.textContent = "Computer: Winner";
        }
        console.log(e.target.textContent);
    })
}
game();

// let playerSelection = prompt("Enter selection: ");
// const computerPlay() = computerPlay();
// console.log(game(playerSelection, computerPlay()));