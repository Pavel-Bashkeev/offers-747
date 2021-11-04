const slider = new Swiper('.swiper', {
  slidesPerView: 3,
  watchSlidesProgress: true,
  spaceBetween: 30,
  setWrapperSize:true,
  centeredSlides: true,
  loop:true,
  roundLengths: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  breakpoints: {
    
    320: {
      slidesPerView: 1,
    },
    
    640: {
      slidesPerView: 1.5,
    },
    1050: {
      slidesPerView: 3,
    }
  }
})