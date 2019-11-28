var menuHeaderWrapper = document.querySelector('.main-header__wrapper');
var logoWhite = document.querySelector('.main-header__logo-image-white');
var logoBlue = document.querySelector('.main-header__logo-image-blue');
var menuButton = document.querySelector('.main-header__toggle-menu');
var menuButtonOpen = document.querySelector('.main-header__toggle-menu-open');
var menuButtonClose = document.querySelector('.main-header__toggle-menu-close');
var menuMain = document.querySelector('.main-nav');

var showFilterButton = document.querySelector('.catalog-filter__show');
var hideFilterButton = document.querySelector('.catalog-filter__hide');
var closeFilterButton = document.querySelector('.countries-filter__button');
var filterMain = document.querySelector('.catalog-filter__countries');

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (menuMain.classList.contains('hide-block')) {
    menuMain.classList.remove('hide-block');
    menuMain.classList.add('show-fixed');
    menuButtonOpen.classList.add('hide-block');
    menuButtonClose.classList.remove('hide-block');
    logoWhite.classList.add('hide-block');
    logoBlue.classList.remove('hide-block');
    menuHeaderWrapper.classList.add('main-header__wrapper--open');
  } else {
    menuMain.classList.remove('show-fixed');
    menuMain.classList.add('hide-block');
    menuButtonOpen.classList.remove('hide-block');
    menuButtonClose.classList.add('hide-block');
    logoWhite.classList.remove('hide-block');
    logoBlue.classList.add('hide-block');
    menuHeaderWrapper.classList.remove('main-header__wrapper--open');
  }
})

showFilterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
    filterMain.classList.remove('hide-block');
    filterMain.classList.add('show-fixed');
    showFilterButton.classList.add('hide-block');
    hideFilterButton.classList.remove('hide-block');
})

hideFilterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
    filterMain.classList.add('hide-block');
    filterMain.classList.remove('show-fixed');
    showFilterButton.classList.remove('hide-block');
    hideFilterButton.classList.add('hide-block');
})

closeFilterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
    filterMain.classList.add('hide-block');
    filterMain.classList.remove('show-fixed');
    showFilterButton.classList.remove('hide-block');
    hideFilterButton.classList.add('hide-block');
})
