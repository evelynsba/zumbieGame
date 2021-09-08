
// This is Lucas finally, it checks if Lucas is clicked and then redirect the user to Lucas page

function lucasFinal(){
    var elemento = document.querySelector("#lucas");
    
    elemento.addEventListener("click", function(){
    window.open("./src/finalLucas.html");
});
}


lucasFinal();