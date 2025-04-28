$(document).ready(function () {
    // Manejar envío del formulario de contacto
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
      const nombre = $('#nombre').val();
      Swal.fire({
        title: '¡Gracias, ' + nombre + '!',
        text: 'Hemos recibido tu mensaje y te responderemos pronto.',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      }).then(() => {
        // Opcional: resetear el formulario
        $('#contactForm')[0].reset();
      });
    });
  });
  