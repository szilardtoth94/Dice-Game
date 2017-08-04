document.querySelector("body").addEventListener("load",setProperty()); // initialize the  start configuration
function setProperty(){
        actualPlayer=0;
        actualScore=0;
        playerList[0].score=0;
        playerList[1].score=0;
        document.getElementById("start").disabled=false;
        document.getElementById("restart").disabled=true;
        document.getElementById("changePlayer").disabled=true;
        document.getElementById("nextOne").disabled=true;
        document.getElementById("stop").disabled=true;
        document.getElementById("fisrtActualScore").innerHTML =0;
        document.getElementById("fisrtScore").innerHTML = playerList[0].score;
        document.getElementById("secondActualScore").innerHTML =0;
        document.getElementById("secondScore").innerHTML = playerList[1].score;
        document.getElementById("userinfo").style.visibility='visible';
        document.getElementById("first").style.background="grey";
        document.getElementById("second").style.background= "transparent";
} //starting proprties