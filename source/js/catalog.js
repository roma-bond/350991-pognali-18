var showFilterButton = document.querySelector('.catalog-filter__show');
var hideFilterButton = document.querySelector('.catalog-filter__hide');
var closeFilterButton = document.querySelector('.countries-filter__button');
var filterMain = document.querySelector('.catalog-filter__countries');
var continentsList = document.querySelector('.catalog-filter__continents');

filterMain.classList.add('hide-block');

showFilterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterMain.classList.remove('hide-block');
  filterMain.classList.add('show--absolute');
  showFilterButton.classList.add('hide-block');
  hideFilterButton.classList.remove('hide-block');
  continentsList.classList.remove('hide-block');
  continentsList.classList.add('show--flex');
})

hideFilterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterMain.classList.add('hide-block');
  filterMain.classList.remove('show--absolute');
  showFilterButton.classList.remove('hide-block');
  hideFilterButton.classList.add('hide-block');
  continentsList.classList.remove('show--flex');
  continentsList.classList.add('hide-block');
})

closeFilterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterMain.classList.add('hide-block');
  filterMain.classList.remove('show--absolute');
  showFilterButton.classList.remove('hide-block');
  hideFilterButton.classList.add('hide-block');
  continentsList.classList.remove('show--flex');
  continentsList.classList.add('hide-block');
})
