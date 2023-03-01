//Слайдер
let mySwiper = new Swiper('.swiper-container', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    hide: true,
  },
});


window.addEventListener('DOMContentLoaded', function () {
  //Бургер-меню
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.toggle('is-active')
  })
});

//Табы
window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.section-how-we-work-link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})
