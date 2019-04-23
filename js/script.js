const $headerScroll = document.querySelector('.header__scroll');
const $headerCall = document.querySelector('.header__call');

window.onscroll = () => {

  console.log(window.pageYOffset);

  if (window.pageYOffset >= 50.0) {
    $headerScroll.style.display = 'flex';
    $headerCall.style.display = 'inline-block';
  }
  else {
    $headerScroll.style.display = 'none';
    $headerCall.style.display = 'none';

  }
}