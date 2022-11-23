const hamburger = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-menu');
const mobile_cli = document.querySelectorAll('.mobile-menu a');
const menu = document.querySelectorAll('.menu a');
const nav_menu = document.getElementsByClassName('.nav_menu');




hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-open');

})

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    nav_menu.classList.toggle('is-active');
    // nav_menu.classList.toggle("is-active");
    console.log('wakaka')
  } else {
    // nav.classList.remove("is-active");
  }
});


mobile_cli.forEach(function(el){
    el.addEventListener('click', function(){
    mobile_menu.classList.toggle('is-open');
})

})
menu.forEach(function(el){
    el.addEventListener('click', function(){
    menu.classList.toggle('is-open');
})

})
const cvbutton = document.querySelectorAll('.cvbtn');


