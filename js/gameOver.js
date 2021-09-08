

function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById('back').addEventListener(
    'click', stopDefAction, false
);



function goBack(){
    open("../index.html");
}

