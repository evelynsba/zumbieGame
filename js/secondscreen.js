
// var userInput = prompt(" Se vc quer ajudar Cindy digite SIM");


    setTimeout(ajudarCindy, 50000)


function ajudarCindy(){
    console.log("oi")
    
    const userInput = prompt(" Se vc quer ajudar Cindy digite SIM");

    if(userInput == "SIM"){
        open("file:///C:/Users/Dell%20E7450%20i5/Desktop/resilia/projeto1/thirdscreen.html")
        
    }
    else{
        alert('GAME OVER VOCE DEVE DIGITAR SIM');
        
    }

}
// document.querySelector('img.pngegg.png').addEventListener('load', function(){
//     // The image is ready!
//   });
