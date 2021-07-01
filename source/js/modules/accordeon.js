'use strict';

(function () {
  const accordeon = document.querySelectorAll('.accordeon');
  const accordeonButton = document.querySelectorAll('.accordeon__button');

  function hideAll() {
    accordeonButton.forEach(function (acc) {
      acc.classList.remove('active-item');
      acc.nextElementSibling.classList.remove('show');
    });
  }

  accordeonButton.forEach(function (acc) {
    acc.addEventListener('click', function () {
      if (acc != this) {
        hideAll();
      }
      this.classList.toggle('active-item');
      this.nextElementSibling.classList.toggle('show');
    })
  });
})();
