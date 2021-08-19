
// var userInput = prompt(" Se vc quer ajudar Cindy digite SIM");

function ajudarCindy(){
    var userInput = prompt(" Se vc quer ajudar Cindy digite SIM");

    if(userInput == "SIM"){
        open("file:///C:/Users/Dell%20E7450%20i5/Desktop/resilia/projeto1/thirdscreen.html")
        
    }
    else{
        alert('GAME OVER VOCE DEVE DIGITAR SIM');
        
    }

}
ajudarCindy();