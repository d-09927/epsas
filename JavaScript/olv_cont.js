document.getElementById("olvido").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje");

  if (validarCorreo(email)) {
    mensaje.textContent = `Se han enviado instrucciones a ${email}.`;
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Por favor, ingresa un correo válido.";
    mensaje.style.color = "red";
  }
  window.location= "login.html"
});

function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}
