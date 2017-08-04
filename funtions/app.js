var actualPlayer=0;//0- when first user play,1- if second user play   
var actualScore=0; // the  last roll  value
var win =0; // boolean to disable next roll and stop button if  someone win
var winScore =40;
var robot=0;

document.getElementById("start").addEventListener("click",function (){
    if(!document.getElementById("firstUserName").value){
        alert("Enter the first player name");
    }
    else if(!document.getElementById("secondUserName").value){
        var robotList = ['KITT','Mega Man','Johnny 5','Optimus Prime','R2D2','Wall-E'];
        username ="(robot)"+ robotList[parseInt(Math.floor((Math.random() * 6) + 1))];
        document.getElementById("username2").innerHTML =  username;
        playerList[1].name=username;
        robot=1;
        restartGame();
    }
    else {
        restartGame();
    }
}); //username validator ,login from hidden and variable initialize

document.getElementById("nextOne").addEventListener("click",function (){
    document.getElementById("nextOne").disabled=true;
    document.getElementById("stop").disabled=true;
    rollDice();
    
});//change players  when roll 1 , change image if someone win and disable buttons

document.getElementById("stop").addEventListener("click",setScore); //seting score when user  stop  the  game

document.getElementById("restart").addEventListener("click",restartGame); //setting buttons and initialize variables and content 

document.getElementById("changePlayer").addEventListener("click",function (){
    
    restartGame();
    setProperty();
}); // setting the login  form  visible and initialize the  content

function rollDice(){
    var x = parseInt(Math.floor((Math.random() * 6) + 1));
    console.log(x);
    document.getElementById("diceimg").src="assests/img/Terning"+x+".svg";
    
    if(x==1){
        actualScore=0;
        document.getElementById("fisrtActualScore").innerHTML =0;
        document.getElementById("secondActualScore").innerHTML =0;
        actualPlayer=!actualPlayer;
        timeOut();
            
    }else {
        if(!actualPlayer){
            actualScore = parseInt(document.getElementById("fisrtActualScore").innerHTML);
            actualScore = actualScore + x;
            document.getElementById("fisrtActualScore").innerHTML = actualScore;
            if((actualScore+playerList[0].score)>=winScore){

              setWinner();
                
            }
            
        }
        else {
            actualScore = parseInt(document.getElementById("secondActualScore").innerHTML);
            actualScore =actualScore + x;
            document.getElementById("secondActualScore").innerHTML =actualScore;
            
            if(!robot){
                if((actualScore+playerList[1].score)>= winScore){
                    setWinner();
                }
            }
            else if(robot){
                document.getElementById("nextOne").disabled=true;
                document.getElementById("stop").disabled=true;;
                if((actualScore+playerList[1].score)>= winScore){
                    setWinner();
                }
                
                if(actualScore>14){
                    setScore();
                }
            }
        }
        timeOut();
    }
}

function timeOut(){
    setTimeout(function(){
                document.getElementById("diceimg").src="assests/img/dice.gif";
                if(!actualPlayer){
                    document.getElementById("actual-player-name").innerHTML = playerList[0].name ;
                    document.getElementById("first").style.background="grey";
                    document.getElementById("second").style.background= "transparent";
                    console.log("here");
                }
                else{
                    document.getElementById("actual-player-name").innerHTML = playerList[1].name ;
                    document.getElementById("first").style.background="transparent";
                    document.getElementById("second").style.background="grey";
                }
                if(!robot){
                    if(!win){
                        document.getElementById("nextOne").disabled=false;
                        document.getElementById("stop").disabled=false;
                    }else {
                        document.getElementById("nextOne").disabled=true;
                        document.getElementById("stop").disabled=true;;
                    }
                }
                else if (!actualPlayer){
                     if(!win){
                        document.getElementById("nextOne").disabled=false;
                        document.getElementById("stop").disabled=false;
                    }else {
                        document.getElementById("nextOne").disabled=true;
                        document.getElementById("stop").disabled=true;;
                    }
                }
                if(robot && actualPlayer && !win){
                    setTimeout(function() {
                        rollDice();
                    },1000);
                }

            },1000);
}

function setWinner(){
    if(!actualPlayer){
        document.getElementById("stateimage1").src="assests/img/winner.jpg";
        document.getElementById("stateimage2").src="assests/img/loser.jpg";
        document.getElementById("stateimage1").style.display="inline";
        document.getElementById("stateimage2").style.display="inline";

        if(!playerList[0].gender){
            document.getElementById("profileimage1").src = "assests/img/winnerbusinessman.svg";
        }else {
            document.getElementById("profileimage2").src = "assests/img/winnerbusinesswoman.svg ";

        }
        if(!playerList[1].gender){
            document.getElementById("profileimage2").src = "assests/img/lostbusinessman.svg ";
        }else {
            document.getElementById("profileimage2").src = "assests/img/lostbusinesswoman.svg ";

        }
    }
    else {
        document.getElementById("stateimage2").src="assests/img/winner.jpg";
        document.getElementById("stateimage1").src="assests/img/loser.jpg";
        document.getElementById("stateimage1").style.display="inline";
        document.getElementById("stateimage2").style.display="inline";

        if(!playerList[1].gender){
            document.getElementById("profileimage2").src = "assests/img/winnerbusinessman.svg ";
        }else {
            document.getElementById("profileimage2").src = "assests/img/winnerbusinesswoman.svg ";

        }
        if(!playerList[0].gender){
            document.getElementById("profileimage1").src = "assests/img/lostbusinessman.svg ";
        }else {
            document.getElementById("profileimage1").src = "assests/img/lostbusinesswoman.svg ";
        }
       
    }
    
    document.getElementById("start").disabled=true;
    document.getElementById("restart").disabled=false;
    document.getElementById("changePlayer").disabled=false;
    win=1;

}

function setScore(){
    if(!actualPlayer){
        playerList[0].score += actualScore;
        document.getElementById("fisrtActualScore").innerHTML =0;
        document.getElementById("fisrtScore").innerHTML = playerList[0].score;
        
    }
    else if(actualPlayer){
        playerList[1].score += parseInt(actualScore);
        document.getElementById("secondActualScore").innerHTML =0;
        document.getElementById("secondScore").innerHTML = playerList[1].score;
        
    }
    actualScore=0;
    actualPlayer=!actualPlayer; 
    document.getElementById("nextOne").disabled=true;
    document.getElementById("stop").disabled=true;;
    timeOut();
} //saving the  actual score

function restartGame(){
        win=0;
        actualPlayer=0;
        actualScore=0;
        playerList[0].score=0;
        playerList[1].score=0;
        document.getElementById("stateimage1").style.display="none";
        document.getElementById("stateimage2").style.display="none";
        document.getElementById("actual-player-name").innerHTML = playerList[0].name ;
        document.getElementById("start").disabled=true;
        document.getElementById("restart").disabled=false;
        document.getElementById("changePlayer").disabled=false;
        document.getElementById("userinfo").style.visibility='hidden';
        document.getElementById("nextOne").disabled=false;
        document.getElementById("stop").disabled=false;
        document.getElementById("first").style.background="grey";
        document.getElementById("fisrtActualScore").innerHTML =0;
        document.getElementById("fisrtScore").innerHTML = playerList[0].score;
        document.getElementById("secondActualScore").innerHTML =0;
        document.getElementById("secondScore").innerHTML = playerList[1].score;
        document.getElementById("first").style.background="grey";
        document.getElementById("second").style.background= "transparent";
    
        if(!playerList[0].gender){
            document.getElementById("profileimage1").src = "assests/img/businessman.svg";
        } else{
             document.getElementById("profileimage1").src = "assests/img/businesswoman.svg";
        }
        if(!playerList[1].gender){
            document.getElementById("profileimage2").src = "assests/img/businessman.svg";
        } else{
             document.getElementById("profileimage2").src = "assests/img/businesswoman.svg";
        }
} //reseting the  variables and content



