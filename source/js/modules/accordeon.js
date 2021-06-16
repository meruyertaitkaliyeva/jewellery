'use strict';

(function () {
  const faqAccordeon = document.querySelector('.faq__accordeon');
  // const faqItem = faqAccordeon.querySelectorAll('.faq__item');
  const faqButton = faqAccordeon.querySelectorAll('.faq__button');

  faqAccordeon.classList.remove('faq__no-js');

  function hideAll() {
    faqButton.forEach(function (acc) {
      acc.classList.remove('active');
      acc.nextElementSibling.classList.remove('show');
    });
  }

  faqButton.forEach(function (acc) {
    acc.addEventListener('click', function () {
      if (acc != this) {
        hideAll();
      }
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    })
  });
})();
