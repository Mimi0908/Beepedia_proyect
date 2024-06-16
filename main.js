document.addEventListener("DOMContentLoaded", function () {
    var image = document.querySelector(".banner img");
    function handleScroll() {
        var scrollPosition = window.scrollY;
        var newPosition = -scrollPosition / 5;
        var newOpacity = 1 - scrollPosition / 500;
        image.style.transform = "translateX(" + newPosition + "px)";
        image.style.opacity = newOpacity;
    }
    window.addEventListener("scroll", handleScroll);
});

const btn = document.getElementById('menuToggle')
const navMenu= document.getElementById('navegador')
const header= document.querySelector('header');

btn.addEventListener('click',function(){
    navMenu.classList.toggle('active');
    header.classList.toggle('activo')
})