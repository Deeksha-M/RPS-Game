            const availChoice = ["rock","paper","scissor"];
            const availImgs = ["images/rock.PNG","images/paper.PNG","images/scissor.PNG"];
            var compChoice;
            var playerChoice;
            var compScore = 0;
            var playerScore = 0;
            var flag = "false";
            
            function compSelection(){
                var pos = Math.floor(Math.random()*3);
                compChoice = availChoice[pos];
                choiceDisplay(availImgs[pos],"comp-option");
                gameResult();
                document.getElementById("score-player").innerHTML = playerScore;
                document.getElementById("score-computer").innerHTML = compScore;
            }
            
            function userSelection(){
                document.getElementById("rock").onclick = function(){
                    playerChoice = availChoice[0];
                    choiceDisplay(availImgs[0],"player-option");
                    compSelection();
                }
                document.getElementById("paper").onclick = function(){
                    playerChoice = availChoice[1];
                    choiceDisplay(availImgs[1],"player-option");
                    compSelection();
                }
                document.getElementById("scissor").onclick = function(){
                    playerChoice = availChoice[2];
                    choiceDisplay(availImgs[2],"player-option");
                    compSelection();
                }
            }
            
            function choiceDisplay(x,user){
                document.getElementById(user).innerHTML = "<img src="+x+">";
            }

            function gameResult(){
                if(!((playerScore === 5) || (compScore === 5))){
                    gameLogic();
                }
            }

            function gameLogic(){
                var logicVar = compChoice + playerChoice;
                if(logicVar === "rockpaper" || logicVar === "paperscissor" || logicVar === "scissorrock"){
                    playerScore++;
                }
                if(logicVar === "rockscissor" || logicVar === "scissorpaper" || logicVar === "paperrock"){
                    compScore++;
                }
                if((playerScore === 5) || (compScore === 5)){
                    restart();
                }
            }
            
            function restart(){
                document.getElementById("option-container").style.display = "none";
                    document.getElementById("result-container").style.display = "block";
                    document.getElementById("result-display").style.display = "block";
                    if(compScore > playerScore){
                        document.getElementById("result-display").innerHTML = "Computer Won the Game";
                    }
                        
                    else{
                        document.getElementById("result-display").innerHTML = "You Won the Game!";
                    }
                    document.getElementById("result-button").onclick = function(){
                        window.location.reload();
                    }
            }
            userSelection();
            