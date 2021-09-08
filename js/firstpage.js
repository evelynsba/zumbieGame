
const botao = document.getElementById('button');



botao.addEventListener("click", function(){
    if(document.getElementById('button').clicked == true)
{
   alert("button was clicked");
}
else{
    open("./src/secondscreen.html")
}
});




