
// If the user choose Roger the function will redirect them to Rogers end


function rogerFinal(){
    var elemento = document.querySelector("#roger");
    
    elemento.addEventListener("click", function(){
    window.open("./src/finalRoger.html");
});
}


rogerFinal();

