window.addEventListener('DOMContentLoaded', function () {
  //Бургер-меню
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('animate');
  })

  //Поисковик
  document.querySelector('.search__btn').addEventListener('click', function () {
    document.querySelector('.header__search').classList.toggle('header__search_expanded');
  })


  //Бургер-меню для художников
  const item = document.querySelectorAll('.drop__btn');
  const dropdown = document.querySelectorAll('.dropdown');
  const arrow = document.querySelectorAll('.drop__btn-arrow');

  item.forEach(el => {
    el.addEventListener('click', (e) => {
      dropdown.forEach(el => {
        el.classList.remove(('dropdown--active'))
      })
      arrow.forEach(el => {
        el.classList.remove(('drop__btn-arrow-rotate'))
      })
      e.currentTarget.closest('.menu__item').querySelector('.dropdown').classList.toggle('dropdown--active');
      e.currentTarget.closest('.menu__item').querySelector('.drop__btn-arrow').classList.toggle('drop__btn-arrow-rotate');
    });
  });

  document.addEventListener('click', (e) => {
    console.log(e.target)
    if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('drop__btn')) {
      dropdown.forEach(el => {
        el.classList.remove(('dropdown--active'))
      })
      arrow.forEach(el => {
        el.classList.remove(('drop__btn-arrow-rotate'))
      })
    }
  });


  // Слайдер для фона
  const swiperHero = new Swiper('.hero__slider', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  //Слайдер в галерее
  let swiperGallery = document.querySelector('.gallery__swipper-container');
  const mySwiperGallery = new Swiper(swiperGallery, {
    spaceBetween: 50, // расстояние между слайдерами (margin)
    slidesPerColumnFill: 'row',// Может быть «столбцом» или «строкой». Определяет, как слайды должны заполнять строки, по столбцу или по строке
    navigation: {
      nextEl: '.gallery-btn-next', // кнопка влево
      prevEl: '.gallery-btn-prev', // кнопка вправо
    },
    pagination: { //точки слайдера
      el: '.gallery__pag', // класс точек
      type: 'fraction', // тип точек (цифры)
      clickable: true, // нажатие на кнопку курсором
    },
    breakpoints: {
      // 1580: {
      //   slidesPerView: 3,
      //   spaceBetween: 50,
      //   slidesPerColumn: 2, //Количество слайдов в столбце, для многострочного макета
      //   slidesPerGroup: 3, // по сколько за один раз можно крутить кол-во слайдов
      // },
      1366: {
        slidesPerView: 3,
        spaceBetween: 34,
        slidesPerColumn: 2, //Количество слайдов в столбце, для многострочного макета
        slidesPerGroup: 3, // по сколько за один раз можно крутить кол-во слайдов
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 34,
        slidesPerColumn: 2, //Количество слайдов в столбце, для многострочного макета
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },



    }
  });

  // var swiper = new Swiper('.gallery__swipper-container', {
  //   slidesPerColumnFill: 'row',
  //   speed: 1000,
  //   lazy: {
  //     loadPrevNext: true,
  //   },
  //   pagination: {
  //     el: '.gallery__pag',
  //     type: 'fraction',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.sgallery-btn-next',
  //     prevEl: '.gallery-btn-prev',
  //   },
  //   breakpoints: {
  //     1366: {
  //       slidesPerView: 3,
  //       slidesPerColumn: 2,
  //       spaceBetween: 50,
  //       slidesPerGroup: 3,
  //     },
  //     1024: {
  //       slidesPerView: 2,
  //       spaceBetween: 34,
  //       slidesPerColumn: 2, //Количество слайдов в столбце, для многострочного макета
  //     },
  //     577: {
  //       slidesPerView: 2,
  //       slidesPerColumn: 2,
  //       slidesPerGroup: 2,
  //     },
  //     320: {
  //       speed: 300,
  //       slidesPerView: 1,
  //     },
  //   },
  // });



  //Слайдер в издании
  let swiperEditions = document.querySelector('.editions__swipper-container');
  const mySwiperEditions = new Swiper(swiperEditions, {
    spaceBetween: 50, // расстояние между слайдерами (margin)
    slidesPerColumnFill: 'row',// Может быть «столбцом» или «строкой». Определяет, как слайды должны заполнять строки, по столбцу или по строке
    navigation: {
      nextEl: '.editions-btn-next', // кнопка влево
      prevEl: '.editions-btn-prev', // кнопка вправо
    },
    pagination: { //точки слайдера
      el: '.editions__pag', // класс точек
      type: 'fraction', // тип точек (цифры)
      clickable: true, // нажатие на кнопку курсором
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerColumn: 2, //Количество слайдов в столбце, для многострочного макета
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 50,
        // slidesPerColumn: 2, //Количество слайдов в столбце, для многострочного макета
        slidesPerGroup: 1, // по сколько за один раз можно крутить кол-во слайдов
      },
    }
  });

  //Слайдер в проектах
  let swiperProjects = document.querySelector('.projects__swipper-container');
  const mySwiperProjects = new Swiper(swiperProjects, {
    spaceBetween: 50, // расстояние между слайдерами (margin)
    slidesPerColumnFill: 'row',// Может быть «столбцом» или «строкой». Определяет, как слайды должны заполнять строки, по столбцу или по строке
    navigation: {
      nextEl: '.projects-btn-next', // кнопка влево
      prevEl: '.projects-btn-prev', // кнопка вправо
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerColumn: 2, //Количество слайдов в столбце, для многострочного макета
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3, // по сколько за один раз можно крутить кол-во слайдов
      },
    }
  });

  //select-gallery
  const gallerySelect = document.querySelector('.select-gallery');
  const choices = new Choices(gallerySelect, {
    searchEnabled: false,
    itemSelectText: '',
    // position: 'bottom',
  });

  // catalog-accordion
  document.querySelectorAll('.accordion__control').forEach((item) =>
    item.addEventListener('click', (e) => {
      const parent = item.parentNode;
      const self = e.currentTarget;

      if (self.classList.contains('open')) {
        item.setAttribute('aria-expanded', true);
        item.setAttribute('aria-hidden', false);
      } else {
        item.setAttribute('aria-expanded', false);
        item.setAttribute('aria-hidden', true);
      }
      parent.classList.toggle('open');
    })
  )



  //Плавность ссылок
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 800, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  //скрытый блок в событиях
  let eventsBtn = document.querySelector('.events__btn');
  let eventsItem = document.querySelectorAll('events__item');
  let eventsHiddenBlock = document.querySelectorAll('.events__item:nth-child(n + 4)');

  eventsBtn.addEventListener('click', function () {
    eventsBtn.classList.add('events__btn_remove');
    for (let i = 0; i < eventsHiddenBlock.length; i++) {
      eventsHiddenBlock[i].style.display = 'flex';
    }
  })


  //Форма в контактах
  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  new JustValidate('.contact-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      // mail: {
      //   required: true,
      //   email: true
      // },
    },
    messages: {
      name: {
        minLength: 'Минимальная длина должна быть более 2 символа',
        maxLength: 'Максимальная длина должна быть не более 30 символов ',
        required: 'Введите имя?'
      },
      // mail: {
      //   email: 'Введён неккоректный e-mail',
      //   required: 'Укажите ваш e-mail'
      // },
      tel: {
        function: 'Некорректно набран номер',
        required: 'Укажите ваш телефон'
      },
    },
  });

  // Карта
  // Функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.758463, 37.601079],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14,
      controls: [],
    });
    //Кнопка Геолокации/местоположения
    var geolocationControl = new ymaps.control.GeolocationControl({
      options: {
        position: {
          bottom: "300px",
          right: "13px"
        }
      }
    });

    myMap.controls.add(geolocationControl);
    //Кнопки увеличения/уменьшения
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",

        position: {
          bottom: "340px",
          right: "13px"

        }
      }
    });
    myMap.controls.add(zoomControl);
    // Создание геообъекта с типом точка(метка).
    // var myGeoObject = new ymaps.GeoObject({
    //   geometry: {
    //     type: "Point", // тип геометрии - точка
    //     coordinates: [48.872197, 2.354224] // координаты точки
    //   }
    // });

    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/label__map.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }


});





