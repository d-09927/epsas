function carpeta(){
    window.location= "bienvenido-area.html"
}

function formatos(){
    window.location = "formatos.html"
}

function usu(){
    var usuario= document.getElementsByClassName("usuario")[0];
    if(usuario.style.visibility == "hidden"){
        usuario.style.visibility = "visible";
    }
    else {
        usuario.style.visibility = "hidden";
    }
}
function noti(){
     var notificaciones= document.getElementsByClassName("notificaciones")[0];
    if(notificaciones.style.visibility == "hidden"){
        notificaciones.style.visibility = "visible";
    }
    else {
        notificaciones.style.visibility = "hidden";
    }
}
function cerrar(){
    window.location= "/index.html"
}