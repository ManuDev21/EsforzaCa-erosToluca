const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_wvo6vpe';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Email Enviado';
      alert('Email Enviado te responderemos pronto gracias!');
    }, (err) => {
      btn.value = 'Error';
      alert(JSON.stringify(err));
    });
});