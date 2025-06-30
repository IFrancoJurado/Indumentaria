const usuarioCorrecto = "admin"
const pass = "123"
const btn = document.querySelector("#btn")
let usuarioLogueado = false

function loguear(){
    const nombreUsuario= document.querySelector("user");
    const contraseñaCorrecta = document.querySelector("pass");  
    if (usuarioCorrecto == nombreUsuario && contraseñaCorrecta == pass){
        window.location.href= "jrd-indumentaria.html";
        usuarioLogueado = true
    } else {
        alert ("Usuario o contraseña incorrecta, intentalo de nuevo")
    }
}