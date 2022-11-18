const formAjax = document.querySelector(".ajaxForm");

function sendForm(e){
    e.preventDefault();
    let name = document.getElementById("name_user").value;
    let date = document.getElementById("date_user").value;
    let time = document.getElementById("time_user").value;
    let localName = document.getElementById("localName_user").value;
    let address = document.getElementById("address_user").value;
    let content = document.querySelector(".formResult");
   
    if(name == "" && date == "" && time == "" && localName == "" && address == ""){
        content.innerHTML +=
          "<div class='alert alert-danger' role='alert'>" +
          "<strong>Ooops! Ha habido un error<br/></strong>" +
          "Debe rrellenar todos los campos" +
          "</div>"; 
    } else if(name == ""){ 
        content.innerHTML +=
          "<div class='alert alert-danger' role='alert'>" +
          "<strong>Ooops! Ha habido un error<br/></strong>" +
          "Debe rellenar el campo nombre" +
          "</div>"; 
    } else if(date == ""){ 
        content.innerHTML +=
          "<div class='alert alert-danger' role='alert'>" +
          "<strong>Ooops! Ha habido un error<br/></strong>" +
          "Debe seleccionar una fecha" +
          "</div>"; 
    } else if(time == ""){ 
        content.innerHTML +=
          "<div class='alert alert-danger' role='alert'>" +
          "<strong>Ooops! Ha habido un error<br/></strong>" +
          "Debe seleccionar una hora" +
          "</div>"; 
    } else if(localName == ""){ 
        content.innerHTML +=
        "<div class='alert alert-danger' role='alert'>" +
        "<strong>Ooops! Ha habido un error<br/></strong>" +
        "Debe rellenar el campo del nombre del local" +
        "</div>";
    } else if(address == ""){  
        content.innerHTML +=
        "<div class='alert alert-danger' role='alert'>" +
        "<strong>Ooops! Ha habido un error<br/></strong>" +
        "Debe rellenar el campo nombre" +
        "</div>";  
    } else{
        let data = new FormData(formAjax);
        let method = this.getAttribute("method");
        let action = this.getAttribute("action");
       
        request = {
            method: method,
            body:data 
        }
        
        fetch(action,request)
        .then(response => response.text())
        .then(response => {
            content.innerHTML = response;  
            window.location.href = `./views/messageResponse.html?res=${response}`;    
        }).catch(error => console.log('Error: ', error)); 
    }   
}
formAjax.addEventListener("submit", sendForm);

