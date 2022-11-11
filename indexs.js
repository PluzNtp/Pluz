const hamburger = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-menu');
const hamburger_icon = hamburger.querySelector('span');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
       ? 'close'
       : 'menu';

    mobile_menu.classList.toggle('is-open');




})
