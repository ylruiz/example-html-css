var btn = document.getElementById("navBtn");
var ul = document.getElementById("menu");
var divNav = document.getElementById("nav-right");
var hero = document.getElementById("hero");

btn.addEventListener("click", function(){
   ul.classList.toggle("active");
   // hero.style.marginTop=180+'px';
});