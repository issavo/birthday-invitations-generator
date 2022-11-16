const formAjax = document.querySelector(".ajaxForm");

function sendFormAjax(e){
    e.preventDefault();
    let name = document.getElementById("name_user").value;
    let date = document.getElementById("date_user").value;
    let time = document.getElementById("time_user").value;
    let localName = document.getElementById("localName_user").value;
    let address = document.getElementById("address_user").value;
    let content = document.querySelector(".message");
    
    if(name !== "" && date !== "" && time !== "" && localName !== "" && address !== ""){
        
    } else {
        
    }
    
}

formAjax.addEventListener("submit", sendFormAjax);