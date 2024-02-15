
/** made to track the scores */
let usrScore = 0;
let compScore = 0;

/*Collect all the choices in the form of the ARRAY of classes*/
const choices = document.querySelectorAll(".choice") ; 
const resMsg = document.getElementById("result-msg") ; 

const userScore = document.getElementById("user-score");
const comScore = document.getElementById("comp-score");

/** this Block fetches the choice user made , on click event : */
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        /** frtching line of the user event */
        const usrChoice= choice.getAttribute("id") ; 
        console.log(`user selecion ${usrChoice}`) ; 

        //playGame call should be in an loop 
        playGame(usrChoice) ; 
    })
})

/** Generates a random number between the 0-3 and selects from avai[i] */
const randomChoice = ()=>{
    const avai = ["rock" ,"paper","scissors"] ; 
    let i = Math.floor(Math.random() * 3) ; 
    return avai[i] ; 
 }


 //GAME YAHA SE SHURU HOTA HAI 
const playGame = (usrChoice) => {
    /**this is the final computer choice we have gennerated */
    const compChoice = randomChoice() ; 
    console.log(`comp selecion ${compChoice}`) ; 

    if(compChoice==usrChoice){ //draw game
        console.log("gamw is a draw!") ;
        resMsg.innerText = "game was a Draw !" ; 
        resMsg.style.backgroundColor = "#FEBD69" ; 
    }else{  

        // main logic body of the code // 

        let usrWon = true ; 
        //if usr==rock , he can only win if comp==scissors else  he losses
        if(usrChoice==="rock"){
           usrWon = compChoice==="scissors" ?  true : false ; 
        }
        //if usr==paper , he can only win if comp==rock else  he losses
        else if(usrChoice==="paper"){
            usrWon = compChoice==="rock" ?  true : false ; 
        }
        //if usr==scissors , he can only win if comp==paper else  he losses
        else{
            usrWon = compChoice==="paper" ?  true : false ; 
        }

        //display them winners
        showWinner(usrWon,usrChoice,compChoice) ; 
    }
}


// updation in the screen after the results 
const showWinner = (usrWon,usrChoice,compChoice)=>{
    if(usrWon){
        userScore.innerText = ++usrScore ; //update counter
        resMsg.innerText = `You Win! ${usrChoice} beats ${compChoice}`; //display messege
        resMsg.style.backgroundColor = "#097969"; //change color
    }
    else{
        comScore.innerText = ++compScore;
        resMsg.innerText = `You Lose! ${compChoice} beats ${usrChoice}`; 
        resMsg.style.backgroundColor = "#EE4B2B";
    }
 }