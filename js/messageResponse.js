let content = document.querySelector(".message");
content.innerHTML =
  "<div class='alert alert-success pt-3 pb-3' role='alert'>" +
  "<h2>ENHORABUENA!!</h2>" +
  "Los datos han sido registrados correctamente. " +
  "</div>";

let url = document.querySelector(".url");
const params = window.location.search;
const urlParams = new URLSearchParams(params);
const values = urlParams.values();
for (let value of values) {
  let valuesParam = JSON.parse(value);
  url.innerHTML =
    "<div class='container pt-3 pb-5'><h5 class='pt-3 pb-2'>El enlace de tu invitación es:</h5><a class='pt-2 pb-5' href='../index.html'>" +
    `./index.html?name=${valuesParam.name_user}&fecha=${valuesParam.date_user}&time=${valuesParam.time_user}&local=${valuesParam.localName_user}&address=${valuesParam.address_user}` +
    "</a></div>";
}


     
