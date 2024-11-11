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
            console.log(compChoice);
            return compChoice;  
        }
        else if (randNumber%3==1){
            compChoice = "paper"; 
            console.log(compChoice);
            return compChoice;
        }
        else{
            compChoice = "scissors"; 
            console.log(compChoice);
            return compChoice;
        }
    }

    //User input of rock, paper or scissors (make sure it's case insensitive)
    function getHumanChoice(){
        let humanChoice = window.prompt("Rock, Paper or Scissors?"); 
        if (humanChoice.toLowerCase()=="rock"||humanChoice.toLowerCase()=="paper"||humanChoice.toLowerCase()=="scissors"){
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
            console.log("It's a draw")
        else if (humanChoice==="rock" & (computerChoice==="scissors")){
            
        }
       }

    }

    var humanSelection = getHumanChoice(); 
    var computerSelection = getComputerChoice(); 

    //Tabulate winner to score
    //Repeat game for 5 rounds
    function playGame ()[

    ] 
    //Check who has more points and declare winner 
