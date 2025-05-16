document.addEventListener('DOMcontentLoaded', function(){
    const resgistroForm = document.getElementById('registroForm');
    const mensajeEnviado = document.getElementById('mensajeEnviado');

    //inputs
    const nombreInput = document.getElementById('nombre');
    const identificacionInput = document.getElementById('identificacion');
    const telefonoInput = document.getElementById('telefono');
    const emailInput = document.getElementById('email')

    //error de mensajes
    const errorNombre = document.getElementById('errorNombre');
    const errorIdentificacion = document.getElementById('errorEmail');
    const errorTelefono = document.getElementById('errorTelefono');
    const errorEmail = document.getElementById('errorEmail');

    //
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    //funcion de mostrar error 
    function showError(input, errorElement) {
        input.classList.add('invalid');errorElement.style.display = 'block';
    }
    //funcion para ocultar mensaje de error 
    function hideError(input, errorElement){
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
    }
// Función para ocultar mensaje de error
    function hideError(input, errorElement) {
    input.classList.remove('invalid');
    errorElement.style.display = 'none';
    }
            
    // Eventos para validar en tiempo real
    nombreInput.addEventListener('input', function() {
        if (nombreInput.value.trim() !== ''){
            hideError(nombreInput, errorNombre);
        }
    });
            
    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
                    hideError(emailInput, errorEmail);
                }
            });
            
            // Envío del formulario
            registroForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Validación del nombre
                if (nombreInput.value.trim() === '') {
                    showError(nombreInput, errorNombre);
                    isValid = false;
                } else {
                    hideError(nombreInput, errorNombre);
                }
                
                // Validación del email
                if (!validateEmail(emailInput.value)) {
                    showError(emailInput, errorEmail);
                    isValid = false;
                } else {
                    hideError(emailInput, errorEmail);
                }
                
                // Si todo es válido, mostrar mensaje de éxito
                if (isValid) {
                    // Aquí normalmente enviarías los datos a un servidor
                    console.log("Datos del formulario:", {
                        nombre: nombreInput.value,
                        email: emailInput.value,
                        password: passwordInput.value
                    });
                    
                    // Ocultar formulario y mostrar mensaje de éxito
                    registroForm.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // También podrías simular el envío a un servidor:
                    // const userData = {
                    //     nombre: nombreInput.value,
                    //     email: emailInput.value,
                    //     password: passwordInput.value
                    // };
                    // 
                    // fetch('https://tuapi.com/registro', {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json'
                    //     },
                    //     body: JSON.stringify(userData)
                    // })
                    // .then(response => response.json())
                    // .then(data => {
                    //     registroForm.style.display = 'none';
                    //     successMessage.style.display = 'block';
                    // })
                    // .catch(error => {
                    //     console.error('Error:', error);
                    // });
                }
            });
        });









