
// var userInput = prompt(" Se vc quer ajudar Cindy digite SIM");
var intervalo = '';

intervalo = setTimeout(function() {ajudarCindy(); clearInterval(intervalo)}, 5000);


function ajudarCindy(){
    console.log("oi")
    
    const userInput = prompt(" Se vc quer ajudar Cindy digite SIM");

    if(userInput == "SIM"){
        open("./src/thirdscreen.html")
        
    }
    else{
        alert('GAME OVER VOCE DEVE DIGITAR SIM');
        
    }

}
// document.querySelector('img.pngegg.png').addEventListener('load', function(){
//     // The image is ready!
//   });
