function miFuncion() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
      alert("Si quieres contactarnos, por favor completa todos los datos.");
    } else {
      alert("¡Envío exitoso!");
    }
}
