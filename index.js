document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".testimonial-container", {
      slidesPerView: 1,           // Показывать только 1 слайд за раз
      spaceBetween: 20,           // Расстояние между слайдами
      loop: true,                 // Бесконечная прокрутка
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".testimonial-nav",
        type: "bullets",
        clickable: true,
        bulletClass: "nav-dot",
        bulletActiveClass: "active",
        renderBullet: function (index, className) {
          return '<div class="' + className + '"></div>';
        },
      },
    });
  });
  
  