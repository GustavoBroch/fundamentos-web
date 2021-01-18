let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let sugestao = document.querySelector("#sugestao")

let sugestaoOk = false;
let emailOk = false;
let assuntoOk = false;

function validaEmail() {
  let emailHelp = document.querySelector('#emailHelp')

  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    emailHelp.innerHTML = "Email Inválido"
  }
  else {
    emailHelp.innerHTML = "Email Válido"
    emailOk = true
  }
}


function validaAssunto(){
  let txtAssunto = document.querySelector("#assuntoHelp")

  if(assunto.value.length >= 50) {
      txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 50 caracteres."
  }
  else{
    txtAssunto.innerHTML = "Texto Válido"
     assuntoOk = true
  }
}

function validaSugestao(){
  let txtSugestao = document.querySelector("#sugestaoHelp")

  if(sugestao.value.length >= 200) {
      txtSugestao.innerHTML = "Texto é muito grande, digite no máximo 200 caracteres."
  }
  else{
    txtSugestao.innerHTML = "Texto Válido"
     sugestaoOk = true
  }
}

function enviar(){
  if(sugestaoOk == true && assuntoOk == true && emailOk == true){
      alert('Formulário enviado com sucesso')
  }
  else{
      alert('Preencha o formulário corretamente antes de enviar.')
  }
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 