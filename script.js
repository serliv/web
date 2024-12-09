// Selección del formulario y el campo de texto
const form = document.getElementById('comentariosForm');

const comentarios = document.getElementById('comentarios');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', function(event) {
    // Evitar el envío por defecto del formulario
    event.preventDefault();

    // Mostrar un mensaje al usuario
    alert('Tu comentario ha sido enviado ¡Gracias!');

    // Limpiar el campo de texto
    comentarios.value = '';
});
