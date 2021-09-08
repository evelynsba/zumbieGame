

var intervalo = '';

intervalo = setTimeout(function() {ajudarCindy(); clearInterval(intervalo)}, 5000);


function ajudarCindy(){

    
    const userInput = prompt(" Vamos ajudar Cindy?");

    if(userInput == "SIM" || userInput == "sim"){
        open("./thirdScreen.html");
        
    }
    else{
        open("./finalLucas.html");
        
    }

}

