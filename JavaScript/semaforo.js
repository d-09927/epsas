function ShowHidden(){
    var popup= document.getElementsByClassName("popup")[0];
    
    if(popup.style.visibility == "hidden"){
        popup.style.visibility = "visible";
    }
    else {
        popup.style.visibility = "hidden";
    }

}

function seleciona (elemento){

    elemento.classList.toggle('marcado');
  } 
   

 function enviar (){
    const marcados = document.querySelectorAll('.marcado');
     if (marcados.length>1){
        alert("elija una sola opcion")
    }

    if(marcados.length===0){
        alert("elija una opcion");}
    else if (marcados.length===1){
    marcados.forEach(el => el.classList.remove('marcado'));
    alert("estado actualizado")}
 }

function descarga(){
    alert("descarga en curso")
}
function bitacora(){
    var bitacora= document.getElementsByClassName("bitacora")[0];
    
    if(bitacora.style.visibility == "hidden"){
        bitacora.style.visibility = "visible";
    }
    else {
        bitacora.style.visibility = "hidden";
    }

}
function cerrar(){
    window.location= "http://127.0.0.1:5501/index.html"
}
function atras(){
    window.location= "bienvenido-ficha.html"
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