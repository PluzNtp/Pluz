const hamburger = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-menu');
const mobile_cli = document.querySelectorAll('.mobile-menu a');
const menu = document.querySelectorAll('.menu a');

var audio = document.getElementById('myaudio');
audio.volume = 0.1;


hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-open');

})


mobile_cli.forEach(function(el){
    el.addEventListener('click', function(){
    mobile_menu.classList.toggle('is-open');
})

})

var bal = document.getElementById("name")
bal.onmousedown = function() {changecolorclick()};

function changecolorclick() {
    if(bal.style.color == "white"){
        bal.style.color = "pink";
    }
    else if (bal.style.color == "pink"){
        bal.style.color = "cyan";
    }else {
        bal.style.color = "white";
    }
}