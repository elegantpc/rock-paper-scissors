const computerChoice=document.getElementById('computer-choice');
const yourChoice=document.getElementById('your-choice');
const result=document.getElementById('result');
const buttons=document.querySelectorAll('.button');
let computer;
let option;
let gameResult;

function getComputerChoice() {
    let randomNumber=Math.floor(Math.random()*3);
    if (randomNumber=== 0){
        computer= 'rock';
    }
    if (randomNumber=== 1){
        computer= 'paper';
    }
    if (randomNumber=== 2){
        computer= 'scissor';
    }
    computerChoice.innerHTML = computer;
}



function getYourChoice(event){
    option=event.target.id;
    yourChoice.innerHTML=option;
    getComputerChoice();
    getResult();
}

buttons.forEach (button=>button.addEventListener('click', getYourChoice))

function getResult(){
    if(computer==='rock'&& option==='paper'){
        gameResult='You Win!'
    }
    if(computer===option){
        gameResult='There is a tie!'
    }
    if(computer==='rock'&& option==='scissor'){
        gameResult='You lose!'
    }
    if(computer==='paper'&& option==='scissor'){
        gameResult='You Win!'
    }
    
    if(computer==='paper'&& option==='rock'){
        gameResult='You lose!'
    }
    if(computer==='scissor'&& option==='rock'){
        gameResult='You Win!'
    }
    
    if(computer==='scissor'&& option==='paper'){
        gameResult='You lose!'
    }
    result.innerHTML= gameResult
}