//Accordion on schedule page
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Menu

const body = document.body;
const menu = document.getElementById('menu');

const hamburger = document.querySelector('.hamburger-menu');
const bar = document.querySelector('.bar');
const nav = document.getElementsByClassName('navbar');
hamburger.addEventListener('click', showMenu);

function showMenu(){
    body.classList.toggle('show');
    bar.classList.toggle('animate');
    nav.classList.add('activated');
}


function openMenu(){
  body.classList.toggle('show');
nav.classList.add('activated');
}

// Media Query Event Listener
// - This is used to remove the "activated"
// class from the navigation when the user
// resizes the browser

// Create a media query list using
// matchMedia
const mql = window.matchMedia('(min-width: 560px)');

// Add a Media Query Listener to the 
// above media query list
mql.addListener(removeTransition);

// Function to remove the transition
// from the navigation when the user
// resizes the browser to desktop
// sizes. In this case when the
// screen width becomes wider then
// 560px
function removeTransition(e){
// e -> is the event object
// e.matches -> stores a true false
// value depending if the media query
// list set above matches or not
if(e.matches){
  body.classList.remove('show');
  nav.classList.remove('activated');
}
}

menu.addEventListener('mousedown', function(e){

  e.preventDefault();

});

