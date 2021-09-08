

function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById('goBack').addEventListener(
    'click', stopDefAction, false
);



function goBack(){
    open("../index.html");
}

