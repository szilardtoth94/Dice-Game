var playerList = [new Player(),new Player()]; 

document.getElementById("firstUserName").addEventListener("change",function () {
    var username = document.getElementById("firstUserName").value;
    document.getElementById("username1").innerHTML =  username;
    document.getElementById("actual-player-name").innerHTML =username ;
    playerList[0].name=username;
    
}); //save the  first user to array

document.getElementById("secondUserName").addEventListener("change",function () {
    var username = document.getElementById("secondUserName").value;
    document.getElementById("username2").innerHTML =  username;
    playerList[1].name=username;
});//save the second user to array

document.getElementById("first-player-male").onclick = onFirstPlayerGenderCheck;// change the first user image to  businessman  when  checkbox checked , save in array

document.getElementById("first-player-female").onclick = onFirstPlayerGenderCheck; //change the first user image to  businesswomen when  checkbox checked, save in array

document.getElementById("second-player-male").onclick = onSecondPlayerGenderCheck;//change the second user image to  businessman  when  checkbox checked,save in array

document.getElementById("second-player-female").onclick = onSecondPlayerGenderCheck;//change the second user image to  businesswomen when  checkbox checked,save in array

function onFirstPlayerGenderCheck(){
    var x = document.getElementById("first-player-male").checked;
    if(!x){
        document.getElementById("profileimage1").src = "assests/img/businesswoman.svg";
        playerList[0].gender=1;
    }
    else{
         document.getElementById("profileimage1").src = "assests/img/businessman.svg";
        playerList[0].gender=0;
    }
}// first user type selector

function onSecondPlayerGenderCheck(){
    var x = document.getElementById("second-player-male").checked;
    if(!x){
        document.getElementById("profileimage2").src = "assests/img/businesswoman.svg";
        playerList[1].gender=1;
    }
    else{
         document.getElementById("profileimage2").src = "assests/img/businessman.svg";
        playerList[1].gender=0;
    }
} //second user type selector
