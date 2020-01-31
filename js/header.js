const desktopM = window.matchMedia('screen and (min-width: 992px')
const menu = document.querySelector('.nav--header')
// console.log(menu);
const burgerButton = document.querySelector('#menu')
// console.log(burgerButton);

desktopM.addListener(validation)

function validation (event) {
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow)
  } else {
    burgerButton.addEventListener('click', hideShow)
  }
}
console.log(event)
validation(desktopM)

function hideShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active')
  } else {
    menu.classList.add('is-active')
  }
}