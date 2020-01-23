var showRatesButton = document.querySelector('.rates__show');
var modalRates = document.querySelector('.modal-rates');
var modalRatesClose = document.querySelector('.modal-rates__close');

showRatesButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalRates.classList.remove('hide-block');
    modalRates.classList.add('show--fixed');
})

modalRatesClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalRates.classList.remove('show--fixed');
    modalRates.classList.add('hide-block');
})
