
const botao = document.getElementById('button');


//evitar que a pagina atuaize 
// form.addEventListener("submit", function(event){
//     event.preventDefault();
// })

botao.addEventListener("click", function(){
    if(document.getElementById('button').clicked == true)
{
   alert("button was clicked");
}
else{
    open("file:///C:/Users/Dell%20E7450%20i5/Desktop/resilia/projeto1/secondscreen.html")
}
});




// function abrirNovaAba(){
//     open("file:///C:/Users/Dell%20E7450%20i5/Desktop/resilia/projeto1/secondscreen.html")
// }
