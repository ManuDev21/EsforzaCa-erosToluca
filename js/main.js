$(document).ready(function() {

  // --- Funcionalidad para botones "Ver más" ---
  $('.more-btn').on('click', function() {
    $(this).siblings('.more-info').slideToggle(400);
    $(this).text($(this).text() === 'Ver más' ? 'Ver menos' : 'Ver más');
  });

  // --- Efecto de scroll en la Navbar ---
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  // --- Inicializar AOS (Animaciones) ---
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });

  // --- Inicializar Typed.js (SOLO si existe el elemento en la página) ---
  if ($('#typed-hero').length) {
    new Typed('#typed-hero', {
      strings: ['Formamos a los campeones del mañana.', 'Disciplina, pasión y trabajo en equipo.', 'Únete a la familia Cañeros.'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true
    });
  }

  // --- Inicializar GLightbox (Galería interactiva) ---
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
  });

});

$(document).ready(function() {

  // --- Funcionalidad para botones "Ver más" ---
  $('.more-btn').on('click', function() {
    $(this).siblings('.more-info').slideToggle(400);
    $(this).text($(this).text() === 'Ver más' ? 'Ver menos' : 'Ver más');
  });

  // --- Efecto de scroll en la Navbar ---
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  // --- Inicializar AOS (Animaciones) ---
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });

  // --- Inicializar Typed.js (SOLO si existe el elemento en la página) ---
  if ($('#typed-hero').length) {
    new Typed('#typed-hero', {
      strings: ['Formamos a los campeones del mañana.', 'Disciplina, pasión y trabajo en equipo.', 'Únete a la familia Cañeros.'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true
    });
  }

  // ==========================================================
  // --- NUEVO: Script para animar el título del campeonato ---
  // ==========================================================
  const animatedTitle = document.getElementById('animated-title');
  if (animatedTitle) {
      const text = animatedTitle.textContent;
      animatedTitle.innerHTML = ''; // Limpiar el contenido original
      text.split('').forEach((char, index) => {
          const span = document.createElement('span');
          // Si es un espacio, usa un carácter de espacio no rompible para que no se colapse
          span.innerHTML = char === ' ' ? '&nbsp;' : char;
          // Aplica un retraso a la animación de cada letra
          span.style.animationDelay = `${index * 0.2}s`;
          animatedTitle.appendChild(span);
      });
  }

  // --- Inicializar GLightbox (Galería interactiva) ---
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
  });

});