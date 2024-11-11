    //Generate random whole number
    //Modulus of 3 to get one of 3 results 
    //
    let humanScore = 0; 
    let computerScore = 0; 

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
    function getHumanChoice(){
        let humanChoice = window.prompt("Rock, Paper or Scissors?"); 
        if (humanChoice.toLowerCase()=="rock"||humanChoice.toLowerCase()=="paper"||humanChoice.toLowerCase()=="scissors"){
            console.log(`You chose ${humanChoice}`); 
            return humanChoice.toLowerCase(); 
            
        }
        else{
            console.error("Please input rock, paper or scissors"); 
        }
    }

    //Compare generated computer generated result to user input to see who wins 
    // if same sign then round ends without score
    //if human input beat computer input add score 
    //else add to computer score 


    function playRound(humanChoice, computerChoice){
       if(humanChoice===computerChoice){
            console.log("It's a draw")}
        else if (humanChoice==="rock" && (computerChoice==="scissors")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
        else if (humanChoice==="paper" && computerChoice==="rock"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)      
         }
       else if (humanChoice==="scissors" && computerChoice==="paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)      
    }
       else  {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)      
    }
    }

    var humanSelection = getHumanChoice(); 
    var computerSelection = getComputerChoice(); 

    function playGame(){
        
    }
    //Tabulate winner to score
    //Repeat game for 5 rounds
    
    //Check who has more points and declare winner 
