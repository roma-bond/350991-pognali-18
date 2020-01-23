var countryChoiceButton = document.querySelector('.trip__button');
var countryModal = document.querySelector('.modal-country');
var closeModalButton = document.querySelector('.modal-country__close');
var tripCancelButton = document.querySelector('.trip__choose.modal-country + .trip__cancel');

var formSubmitButton = document.querySelector('.page-form__button-submit');
var textareas = document.querySelectorAll('.fun__textarea');
var errorMessage = document.querySelector('.fun__error-message');

countryChoiceButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (countryModal.classList.contains('hide-block')) {
    countryModal.classList.remove('hide-block');
    tripCancelButton.classList.remove('trip__cancel');
    tripCancelButton.classList.add('hide-block');
  }
});

closeModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  countryModal.classList.add('hide-block');
  tripCancelButton.classList.add('trip__cancel');
  tripCancelButton.classList.remove('hide-block');
});

textareas.forEach(function (item) {
  item.addEventListener('change', function (evt) {
    evt.preventDefault();
    if (item.classList.contains('fun__textarea--invalid') && item.value != '') {
      item.classList.remove('fun__textarea--invalid');
    }
  });
});

formSubmitButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  for(var i = 0; i < textareas.length; i++) {
    if(textareas[i].value == '') {
      textareas[i].classList.add('fun__textarea--invalid')
    }
  }
});
