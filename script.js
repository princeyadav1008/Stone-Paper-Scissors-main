let us=0;
let cs=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".result");

const userscore1=document.querySelector(".abc1");
const userscore2=document.querySelector(".abc2");

const gencompchoice = () =>{
    const option =["rock" ,"paper" ,"scissor"];
    const randind=Math.floor(Math.random()*3);
    return option[randind];
};

const drawgame = () => {
    msg.innerText = "Game Draw";
}

const showwinner = (userwin,userChoice,compChoice) => {
    if(userwin) {
        us++;
        userscore1.innerText=us;
        msg.innerText= "You Win";
    }
    else {
        cs++;
        userscore2.innerText=cs;
        msg.innerText="You Loss"
    }   
};

const playgame = (userChoice) => {
    const compChoice=gencompchoice();

    if(userChoice === compChoice) {
        drawgame();
    }
    else {
        let userwin=true;
        if(userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper") {
            userwin = compChoice === "scissor" ? false : true ;
        }
        else {
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
});

