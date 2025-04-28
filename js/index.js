$(document).ready(function(){
    $('.more-btn').on('click', function(){
      $(this).siblings('.more-info').slideToggle(400);
      $(this).text($(this).text() === 'Ver más' ? 'Ver menos' : 'Ver más');
    });
  });