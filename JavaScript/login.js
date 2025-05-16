document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log('Intento de inicio de sesión:', { username, password });
            alert('Formulario enviado correctamente');


});
document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log('Intento de inicio de sesión:', { email, password });
            
            if (username && password) {
                alert('Inicio de sesión exitoso.');
                window.location.href = 'bienvenido.html';
            } else {
                alert('Por favor completa todos los campos');
            }
});

function enviar(){
    window.location = "bienvenido-principal.html";
}