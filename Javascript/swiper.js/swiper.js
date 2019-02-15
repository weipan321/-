var swiper = new Swiper('.swiper-container', {
    spaceBetween: 60,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    autoplay:{
                disableOnInteraction: true,
                 delay: 2000,
                 },
  });
