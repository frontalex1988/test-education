window.addEventListener('DOMContentLoaded', function () {
  // catalog__country - tabs
  document.querySelectorAll('.catalog-tabs__btn').forEach(function (catalogTabsBtn) {
    catalogTabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.tabsPath;

      document.querySelectorAll('.catalog-tabs__btn').forEach(function (tabContent) {
        tabContent.classList.remove('catalog-tabs__btn-active');
      })

      document.querySelectorAll('.catalog-tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('catalog-tabs__content_active');
      })
      this.classList.add('catalog-tabs__btn-active');
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('catalog-tabs__content_active');

    })
  })

  
  // tabs__card  skillbox
  // document.querySelectorAll('.accordion__content-btn-name').forEach(function (tabsBtn) {
  //   tabsBtn.addEventListener('click', function (event) {
  //     const path = event.currentTarget.dataset.tabsPath;

  //     document.querySelectorAll('.tabs__card').forEach(function (tabContent) {
  //       tabContent.classList.remove('tabs__card_active');
  //     })
  //     document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__card_active')
  //   })
  // })

  function closest(el, selector) {
    if (Element.prototype.closest) {
      return el.closest(selector);
    }

    let parent = el;

    while (parent) {
      if (parent.matches(selector)) {
        return parent;
      }

      parent = parent.parentElement;
    }

    return null;
  }

  document.querySelectorAll('.accordion__content-btn-name').forEach(function (catalogTabsBtn) {
    catalogTabsBtn.addEventListener('click', function (event) {

      const parent = closest(event.currentTarget, '.catalog-tabs__content_active');

      console.log(parent);

      const path = event.currentTarget.dataset.tabsPath;

      console.log(path);

      parent.querySelectorAll('.tabs__card_active').forEach(function (tabContent) {
        console.log(tabContent);
        tabContent.classList.remove('tabs__card_active');
      })

      parent.querySelectorAll('.accordion__content-btn-name_active').forEach(function (tabContent) {
        tabContent.classList.remove('accordion__content-btn-name_active');
      })
      this.classList.add('accordion__content-btn-name_active');

      parent.querySelector(`.tabs__card[data-tabs-target="${path}"]`).classList.add('tabs__card_active');

    })
  })


  // tabs__card  maxgraph
  // const tabs = document.querySelector('.catalog');
  // const tabsBtn = document.querySelectorAll('.accordion__content-btn-name');
  // const tabContent = document.querySelectorAll('.tabs__card');

  // if (tabs) {
  //   tabs.addEventListener('click', (e) => {
  //     if (e.target.classList.contains('accordion__content-btn-name')) {
  //       const tabsPath = e.target.dataset.tabsPath;
  //       tabsHandler(tabsPath);
  //     }
  //   });
  // }

  // const tabsHandler = (path) => {
  //   tabsBtn.forEach(el => { el.classList.remove('accordion__content-btn-name_active') });
  //   document.querySelector(`[data-tabs-path="${path}"]`).classList.add('accordion__content-btn-name_active');

  //   tabContent.forEach(el => { el.classList.remove('tabs__card_active') });
  //   document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__card_active');
  // };




  // document.querySelectorAll('.accordion__content-btn-name').forEach(function (tabsBtn3) {
  //   tabsBtn3.addEventListener('click', function (event3) {
  //     const painters = event3.currentTarget.dataset.tabsPath;
  //     document.querySelectorAll('.accordion__content-btn-name').forEach(function (tabCon31) {
  //       tabCon31.classList.remove('accordion__content-btn-name_active');
  //     })
  //     document.querySelector(`[data-tabs-path="${painters}"]`).classList.add('accordion__content-btn-name_active');

  //     document.querySelectorAll('.tabs__card').forEach(function (tabCon4) {
  //       tabCon4.classList.remove('tabs__card_active');
  //       document.querySelector(`[data-tabs-target="${painters}"]`).classList.add('tabs__card_active');
  //     })

  //   })
  // })


});





