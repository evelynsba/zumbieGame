
// var userInput = prompt(" Se vc quer ajudar Cindy digite SIM");
var intervalo = '';

intervalo = setTimeout(function() {ajudarCindy(); clearInterval(intervalo)}, 5000);


function ajudarCindy(){

    
    const userInput = prompt(" Se vc quer ajudar Cindy digite SIM");

    if(userInput == "SIM" || userInput == "sim"){
        open("./src/thirdscreen.html")
        
    }
    else{
        open("./src/lucasFinal.html");
        
    }

}

