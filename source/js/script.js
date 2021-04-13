
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.toggle-navigation');
var logo = document.querySelector('.page-header__logo');
var header = document.querySelector('page-header-top');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('toggle-navigation--nojs');
logo.classList.remove('page-header__logo--hidden');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('toggle-navigation--open')) {
      navToggle.classList.remove('toggle-navigation--open');
      navToggle.classList.add('toggle-navigation--close');
      logo.classList.add('page-header__logo--hidden');
    }
    else {
    navToggle.classList.add('toggle-navigation--open');
    navToggle.classList.remove('toggle-navigation--close');
    logo.classList.remove('page-header__logo--hidden');
  }
});
          
  