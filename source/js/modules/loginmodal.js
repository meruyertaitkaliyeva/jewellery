'use strict';

(function () {
  const body = document.querySelector('body');
  const loginLink = document.querySelector('.header__user-item--login');
  const loginModal = document.querySelector('.login-modal');
  const loginOverlay = document.querySelector('.login-modal__overlay');
  const loginClose = document.querySelector('.login-modal__close');
  const loginEmail = document.querySelector('#modal-email');
  let isStorageSupport = true;
  let storageEmail = '';

  try {
    storageEmail = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  loginOverlay.classList.remove('modal__no-js');

  loginLink.addEventListener('click', function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    loginOverlay.classList.add('modal-show');
    loginModal.classList.add('shade');
    loginEmail.focus();
    body.classList.add('fixed');
    body.style.width = '100%';
  });

  loginClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (loginOverlay.classList.contains('modal-show')) {
      loginOverlay.classList.remove('modal-show');
      loginModal.classList.remove('shade');
      body.classList.remove('fixed');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (loginOverlay.classList.contains('modal-show')) {
        evt.preventDefault();
        loginOverlay.classList.remove('modal-show');
        loginModal.classList.remove('shade');
        body.classList.remove('fixed');
      }
    }
  });

  body.onclick = function (e) {
    if (e.target.closest('.login-modal__window')) {
      e.stopPropagation();
    } else if (loginOverlay.classList.contains('modal-show')) {
      loginOverlay.classList.remove('modal-show');
      loginModal.classList.remove('shade');
      body.classList.remove('fixed');
    }
  };
})();
