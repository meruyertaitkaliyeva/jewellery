'use strict';

(function () {
  const body = document.body;
  const filter = document.querySelector('.filter');
  const filterOpenButton = document.querySelector('.catalog__filter-button');
  const filterCloseButton = document.querySelector('.filter__close');

  if (window.location.href.endsWith('catalog.html')) {
    filter.classList.remove('filter--nojs');

    filterOpenButton.addEventListener('click', function (evt) {
      evt.stopPropagation();
      evt.preventDefault();
      filter.classList.add('filter-show');
      body.classList.add('fixed');
      body.style.width = '100%';
    });

    filterCloseButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (filter.classList.contains('filter-show')) {
        filter.classList.remove('filter-show');
        body.classList.remove('fixed');
      }
    });
  }
})();
