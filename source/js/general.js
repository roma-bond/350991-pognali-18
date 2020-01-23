var menuHeader = document.querySelector('.main-header');
var logoWhite = document.querySelector('.main-header__logo-image-white');
var logoBlue = document.querySelector('.main-header__logo-image-blue');
var menuButton = document.querySelector('.main-header__toggle-menu');
var menuButtonOpen = document.querySelector('.main-header__toggle-menu-open');
var menuButtonClose = document.querySelector('.main-header__toggle-menu-close');
var menuMain = document.querySelector('.main-nav');
var headerListWrapper = document.querySelector('.main-header__list-wrapper');
var main = document.querySelector('main');

menuMain.classList.remove('main-nav--nojs');
menuMain.classList.add('hide-block');
headerListWrapper.classList.remove('main-header__list-wrapper--nojs');

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (menuMain.classList.contains('hide-block')) {
    menuMain.classList.remove('hide-block');
    menuMain.classList.add('show--absolute');
    menuButtonOpen.classList.add('hide-block');
    menuButtonClose.classList.remove('hide-block');
    logoWhite.classList.add('hide-block');
    logoBlue.classList.remove('hide-block');
    menuHeader.classList.add('main-header--open');
  } else {
    menuMain.classList.remove('show--absolute');
    menuMain.classList.add('hide-block');
    menuButtonOpen.classList.remove('hide-block');
    menuButtonClose.classList.add('hide-block');
    logoWhite.classList.remove('hide-block');
    logoBlue.classList.add('hide-block');
    menuHeader.classList.remove('main-header--open');
  }
})

document.addEventListener('scroll', function (evt) {
  if (!menuHeader.classList.contains('main-header--scroll')) {
    menuHeader.classList.add('main-header--scroll');
    logoWhite.classList.add('hide-block');
    logoBlue.classList.remove('hide-block');
    if (main.classList.contains('page-main')) {
      main.classList.add('page-shift');
    } else {
      main.classList.add('page-shift--inner');
    }
  } else {

    if(pageYOffset <= 0) {
      menuHeader.classList.remove('main-header--scroll');
      logoWhite.classList.remove('hide-block');
      logoBlue.classList.add('hide-block');
    if (main.classList.contains('page-main')) {
      main.classList.remove('page-shift');
    } else {
      main.classList.remove('page-shift--inner');
    }
    }
  }
})
