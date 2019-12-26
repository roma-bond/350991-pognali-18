var menuHeader = document.querySelector('.main-header');
var logoWhite = document.querySelector('.main-header__logo-image-white');
var logoBlue = document.querySelector('.main-header__logo-image-blue');
var menuButton = document.querySelector('.main-header__toggle-menu');
var menuButtonOpen = document.querySelector('.main-header__toggle-menu-open');
var menuButtonClose = document.querySelector('.main-header__toggle-menu-close');
var menuMain = document.querySelector('.main-nav');

menuMain.classList.remove('main-nav--nojs');
menuMain.classList.add('hide-block');

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (menuMain.classList.contains('hide-block')) {
    menuMain.classList.remove('hide-block');
    menuMain.classList.add('show-absolute');
    menuButtonOpen.classList.add('hide-block');
    menuButtonClose.classList.remove('hide-block');
    logoWhite.classList.add('hide-block');
    logoBlue.classList.remove('hide-block');
    menuHeader.classList.add('main-header--open');
  } else {
    menuMain.classList.remove('show-absolute');
    menuMain.classList.add('hide-block');
    menuButtonOpen.classList.remove('hide-block');
    menuButtonClose.classList.add('hide-block');
    logoWhite.classList.remove('hide-block');
    logoBlue.classList.add('hide-block');
    menuHeader.classList.remove('main-header--open');
  }
})
