let showData = document.querySelector(".showData");
function showDataInvitation() {
  const params = window.location.search;
  console.log(params);
  const urlParams = new URLSearchParams(params);
  let name = urlParams.get('name');
  let date = urlParams.get('fecha');
  let time = urlParams.get('time');
  let local = urlParams.get('local');
  let address = urlParams.get('address');
   
    showData.innerHTML ="<h2><span>Cumpleaños de </span><br/> "+name+"</h2>"+
    "<h2><span>El día</span> "+date+" <span>a las</span> "+time+"</h2>"+ 
    "<h2><span>En</span> "+local+"</h2>"+
    "<h2><span>se encuentra en</span><br> "+address+"</h2>"+
    "<h2>Te esperamos!! no faltes</h2>"; 
  }

window.addEventListener("load", showDataInvitation);
