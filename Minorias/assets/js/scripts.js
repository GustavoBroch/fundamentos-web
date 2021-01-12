let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let comentario = document.getElementById('comentario')


let nomeOk = false;
let emailOk = false;
let comentarioOk = false;



function validarNome(){
    let txtNome = document.querySelector("#txtNome")
    
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = "purple"       
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = "green"
        nomeOk = true 
    }
}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    
    if(email.value.indexOf('@') == -1 ||email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = "purple"        
    }else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = "green"
        emailOk = true      
    }   
}

function validarComentario(){
    let txtComentario = document.querySelector("#txtComentario")

    if(comentario.value.length >= 100) {
        txtComentario.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres."
        txtComentario.style.color = "purple"
        txtComentario.style.display = 'block'
    }
    else{
        txtComentario.innerHTML = "Texto Válido."
        txtComentario.style.color = "green"
        comentarioOk = true
     }
   
}
function enviar(){
    if(nomeOk == true && comentarioOk == true && emailOk == true){
        alert('Formulário enviado com sucesso')
    }
    else{
        alert('Preencha o formulário corretamente antes de enviar.')
    }
}
function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}
function fotoZoom(){
    foto.style.width = "700px"
    foto.style.height = "700px"
}
function fotoNormal(){
    foto.style.width = "500px"
    foto.style.height = "500px"
}
