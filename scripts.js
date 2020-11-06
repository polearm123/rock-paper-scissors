function playRounds(playerSelection,computerSelection){

    let computerScore = 0;
    let playerScore = 0;

    console.log("at playRounds");
    console.log(playerSelection);
    console.log(computerSelection);
    for(let i=0;i<playerSelection.length;i++){
        console.log("inside for loop");
        console.log(`Computer selection: ${computerSelection[i]}, Player selection: ${playerSelection[i]}`);
        if(playerSelection[i]==computerSelection[i]){
            console.log("draw! - no score!");
            continue; //draw case
        }else if((playerSelection[i] == "rock" && computerSelection[i]=="scissors")
                    ||(playerSelection[i] == "scissors" && computerSelection[i] == "paper")
                        ||(playerSelection[i]=="paper" && computerSelection[i] == "rock")){
            console.log("player wins!");
            playerScore+=1; //all combinations of player winners
        }else if((computerSelection[i] == "rock" && playerSelection[i]=="scissors")
                    ||(computerSelection[i] == "scissors" && playerSelection[i] == "paper")
                        ||(computerSelection[i]=="paper" && playerSelection[i] == "rock")){
            console.log("computer wins!");
            computerScore+=1; //all combinations of computer winning hands

            }

        }   
        console.log("playerscore" + playerScore);
        console.log("comp score" + computerScore);

    return [playerScore,computerScore];

}

// function handleForm(event) { event.preventDefault(); }  //stops page refresh on form submit

function computerSelection(rounds){
    let computerSelection = []
    for(let i=0;i<rounds;i++){
        let choice = Math.floor(Math.random()*3); 
        computerSelection.push(choiceArray[choice]);

    }
    console.log(computerSelection);

    return computerSelection;

}


function game(rounds){
    let playerChoicesArray = [];
    let choiceContainer = document.querySelector(".choice-container");
    // choiceContainer.addEventListener('submit', handleForm);
    let submitButton = document.querySelector(".form-button");
    
    console.log(choiceContainer);
    

    for(let i=0;i<rounds;i++){ //creates a number of buttons responsible for the number of times play will continue
        let choice = document.createElement('select')
        choice.id=`select${i+1}`;

        for(let j=0;j<choiceArray.length;j++){
            var currentChoice = choiceArray[j];
            var option = document.createElement("option");
            option.value = currentChoice;
            option.appendChild(document.createTextNode(`${currentChoice}`))
            choice.appendChild(option);
        }
        choiceContainer.insertBefore(choice,submitButton);

    }

    submitButton.addEventListener('click',() => {
        for(let i=0;i<rounds;i++){

            var tempChoice = document.getElementById(`select${i+1}`);
            console.log(tempChoice.value);
            playerChoicesArray.push(tempChoice.value);
    
        }
        computerChoices = computerSelection(rounds);
        console.log("after computer");
    
    
        totalScore = playRounds(playerChoicesArray,computerChoices);
        console.log(totalScore);
       
    
    
    
    
        console.log(`After ${rounds} rounds of intense, stategic action the final score is: Player - ${totalScore[0]}   Computer - ${totalScore[1]}`  );
        (totalScore[0] == totalScore[1]) ? para.textContent = "Conclusion, draw!" : 
        (totalScore[1]>totalScore[0]) ? para.textContent = "Conclusion, computer wins!": para.textContent = "Conclusion, player wins!";

    })

   
    
    
   

   

}



const choiceArray = ["rock","paper","scissors"];
let para = document.querySelector("p"); //selects html element to alter on decision

    
    
let rounds = parseInt(prompt("how many rounds would you like to simulate?"));
game(rounds);

// let choices = document.querySelectorAll(".select").values();
// console.log(choices[1]);




    

