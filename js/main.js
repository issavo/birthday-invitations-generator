const formAjax = document.querySelector(".ajaxForm");

function sendForm(e){
    e.preventDefault();
    let name = document.getElementById("name_user").value;
    let date = document.getElementById("date_user").value;
    let time = document.getElementById("time_user").value;
    let localName = document.getElementById("localName_user").value;
    let address = document.getElementById("address_user").value;
    let content = document.querySelector(".message");
    
    if(name !== "" && date !== "" && time !== "" && localName !== "" && address !== ""){
        window.location.href='./views/messageResponse.html';   
    } else {
        content.innerHTML =
          "<div class='alert alert-danger' role='alert'>" +
          "<strong>Ooops! Ha habido un error<br/></strong>" +
          "Debe rellenar todos los campos " +
          "</div>";
    }
}





formAjax.addEventListener("submit", sendForm);