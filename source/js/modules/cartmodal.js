'use strict';

(function () {
  const body = document.querySelector('body');
  const addButton = document.querySelector('.profile__add');
  const cartModal = document.querySelector('.cart-modal');
  const cartOverlay = document.querySelector('.cart-modal__overlay');
  const cartClose = document.querySelector('.cart-modal__close');

  if (window.location.href.endsWith('product.html')) {

    cartOverlay.classList.remove('modal__no-js');

    addButton.addEventListener('click', function (evt) {
      evt.stopPropagation();
      evt.preventDefault();
      cartOverlay.classList.add('modal-show');
      cartModal.classList.add('shade');
      body.classList.add('fixed');
      body.style.width = '100%';
    });

    cartClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (cartOverlay.classList.contains('modal-show')) {
        cartOverlay.classList.remove('modal-show');
        cartModal.classList.remove('shade');
        body.classList.remove('fixed');
      }
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        if (cartOverlay.classList.contains('modal-show')) {
          evt.preventDefault();
          cartOverlay.classList.remove('modal-show');
          cartModal.classList.remove('shade');
          body.classList.remove('fixed');
        }
      }
    });

    body.onclick = function (e) {
      if (e.target.closest('.cart-modal__window')) {
        e.stopPropagation();
      } else if (cartOverlay.classList.contains('modal-show')) {
        cartOverlay.classList.remove('modal-show');
        cartModal.classList.remove('shade');
        body.classList.remove('fixed');
      }
    };
  }
})();
