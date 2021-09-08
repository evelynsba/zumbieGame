
// var userInput = prompt(" Se vc quer ajudar Cindy digite SIM");
var intervalo = '';

intervalo = setTimeout(function() {ajudarCindy(); clearInterval(intervalo)}, 5000);


function ajudarCindy(){

    
    const userInput = prompt(" Vamos ajudar Cindy?");

    if(userInput == "SIM" || userInput == "sim"){
        open("thirdscreen.html");
        
    }
    else{
        open("/finalLucas.html");
        
    }

}

