    //Generate random whole number
    //Modulus of 3 to get one of 3 results 
    //
    let humanScore = 0; 
    let computerScore = 0; 
    let roundNumber = 0; 

    function getComputerChoice(){
        let randNumber = Math.floor(Math.random()*100); 
        var compChoice; 

        if (randNumber%3==0){
            compChoice = "rock"; 
            console.log(`The computer chose ${compChoice}`);
            return compChoice;  
        }
        else if (randNumber%3==1){
            compChoice = "paper"; 
            console.log(`The computer chose ${compChoice}`);
            return compChoice;
        }
        else{
            compChoice = "scissors"; 
            console.log(`The computer chose ${compChoice}`);
            return compChoice;
        }
    }

    //User input of rock, paper or scissors (make sure it's case insensitive)
    function getHumanChoice(humanChoice){
        if (humanChoice.toLowerCase()=="rock"||humanChoice.toLowerCase()=="paper"||humanChoice.toLowerCase()=="scissors"){
            console.log(`You chose ${humanChoice}`); 
            return humanChoice.toLowerCase(); 
            
        }
        else{
            console.error("Please input rock, paper or scissors"); 
            humanChoice = prompt("Please re-enter your choice"); 
            return humanChoice.toLowerCase(); 
        }
    }

    //Compare generated computer generated result to user input to see who wins 
    // if same sign then round ends without score
    //if human input beat computer input add score 
    //else add to computer score 


    function playRound(humanChoice, computerChoice){
       if(humanChoice===computerChoice){
            console.log("It's a draw")
            const newEntry = document.createElement("ul");
            const resultsTable = document.querySelector("#resultsTable");

            resultsTable.appendChild(newEntry);
            newEntry.textContent = "It's a draw"; 
        }
        
            
        else if (humanChoice==="rock" && (computerChoice==="scissors")){
            console.log(`You win! Your ${humanChoice} beat the computer's ${computerChoice}`);
            const newEntry = document.createElement("ul");
            const resultsTable = document.querySelector("#resultsTable");

            resultsTable.appendChild(newEntry);
            newEntry.textContent = `You win! Your ${humanChoice} beats the computer's ${computerChoice}`;
            humanScore++; 
        }
        else if (humanChoice==="paper" && computerChoice==="rock"){
            console.log(`You win! Your ${humanChoice} beats the computer's ${computerChoice}`); 
            const newEntry = document.createElement("ul");
            const resultsTable = document.querySelector("#resultsTable");

            resultsTable.appendChild(newEntry);
            newEntry.textContent = `You win! Your ${humanChoice} beat the computer's ${computerChoice}`;
            humanScore++; 

         }
       else if (humanChoice==="scissors" && computerChoice==="paper"){
        console.log(`You win! Your ${humanChoice} beat the computer's ${computerChoice}`); 
        const newEntry = document.createElement("ul");
        const resultsTable = document.querySelector("#resultsTable");
        resultsTable.appendChild(newEntry);
        newEntry.textContent = `You win! Your ${humanChoice} beats the computer's ${computerChoice}`;
        humanScore++; 

    }
       else  {
        console.log(`You lose! Computer chose ${computerChoice} and beats your${humanChoice}`);    
        const newEntry = document.createElement("ul");
        const resultsTable = document.querySelector("#resultsTable");
        resultsTable.appendChild(newEntry);
        newEntry.textContent = `You lose! Computer's ${computerChoice} beat your ${humanChoice}`;
        computerScore++; 
    }
    }

    
    //Check who has more points and declare winner 

    function declareWinner(){
        if (humanScore>computerScore){
            const newEntry = document.createElement("ul");
            const newRound = document.createElement("button");
            const resultsTable = document.querySelector("#resultsTable");
            resultsTable.appendChild(newEntry);
            newRound.textContent = "Retry"
            newEntry.textContent = `Congrats, you won! You had ${humanScore} wins while the computer only had ${computerScore}`;
            resultsTable.appendChild(newRound);

            humanScore = 0; 
            computerScore = 0; 
            roundNumber = 0; 

            newRound.addEventListener("click",()=>{
        
                resultsTable.textContent = ''
                yourScore.textContent = humanScore;
                compScore.textContent = computerScore;
            }); 
            console.log(`Congrats, you won the match! You had ${humanScore} wins while the computer had ${computerScore}`);
        }
            else if (humanScore<computerScore){
                const newEntry = document.createElement("ul");
                const newRound = document.createElement("button");

                const resultsTable = document.querySelector("#resultsTable");
                resultsTable.appendChild(newEntry);
                resultsTable.appendChild(newRound);
                newRound.textContent = "Retry"
                newEntry.textContent = `You lose the match! You only had ${humanScore} wins while the computer had ${computerScore}`;
                humanScore = 0; 
                computerScore = 0; 
                roundNumber = 0; 

                newRound.addEventListener("click",()=>{
        
                    resultsTable.textContent = ''
                    yourScore.textContent = humanScore;
                    compScore.textContent = computerScore;
                }); 
                console.log(`You lose the match! You only had ${humanScore} wins while the computer had ${computerScore}`);
            }
            else{
                const newEntry = document.createElement("ul");
                const newRound = document.createElement("button");
                const resultsTable = document.querySelector("#resultsTable");
                resultsTable.appendChild(newEntry);
                resultsTable.appendChild(newRound);
                newRound.textContent = "Retry"
                newEntry.textContent = `It's a Draw! The computer and you had the same number of wins of ${humanScore}`;
                humanScore = 0; 
                computerScore = 0; 
                roundNumber = 0;

                newRound.addEventListener("click",()=>{
        
                    resultsTable.textContent = ''
                    yourScore.textContent = humanScore;
                    compScore.textContent = computerScore;  

                }); 

                console.log(`It's a drawn match! The computer and you had the same number of wins of ${humanScore}`);
            }
    }


const yourScore = document.querySelector("#yourScore");
const compScore = document.querySelector("#compScore");


yourScore.textContent = humanScore; 
compScore.textContent = computerScore; 

let getYourChoice = document.querySelector("#choiceButtons"); 
getYourChoice.addEventListener("click",(e) =>{
    let target = e.target; 

    switch(target.id){
        case "rockChoice":

            playRound(getHumanChoice("rock"),getComputerChoice());
            yourScore.textContent = humanScore; 
            compScore.textContent = computerScore; 
            roundNumber++; 

                if(roundNumber==5){
                    declareWinner(); 
        
                }
            
            break; 

        case "paperChoice": 
            playRound(getHumanChoice("paper"),getComputerChoice());
            yourScore.textContent = humanScore; 
            compScore.textContent = computerScore; 
            roundNumber++; 

            if(roundNumber==5){
                declareWinner(); 
            }
            break;

        case "scissorsChoice":
            playRound(getHumanChoice("scissors"),getComputerChoice());
            yourScore.textContent = humanScore; 
            compScore.textContent = computerScore; 
            roundNumber++; 

            if(roundNumber==5){
                declareWinner(); 
            } 
            break; 
        
    }

});