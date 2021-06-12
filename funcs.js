// Resets the value of vh to account fo mobile browsers. First, get the viewport height & multiplyit by 1% to get a value for a vh unit.
let vh = window.innerHeight * 0.01;
// Then set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Listen to the resize event
window.addEventListener('resize', () => {
  // Execute the same script as before
  let vh = window.innerHeight * 0.01; document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Jquery script for the navbar
$(document).ready(function() {
  
  $(window).scroll(function () { 
      var height = window.innerHeight ;
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > height +43 ) {
      $('#navbar').addClass('navbar-fixed');
       $('#about').addClass('about-margin');
    }
    if ($(window).scrollTop() < height + 44) {
      $('#navbar').removeClass('navbar-fixed');
      $('#about').removeClass('about-margin');
    }
  });
});

// Function to apply animation classes to elements as they scroll into view.
function animator(target, anim) {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(anim);
      }
      else {
        entry.target.classList.add('none');
      }
    })
  })
  target.forEach(item => {
    observer.observe(item)
  })
}

const fadeTarget = document.querySelectorAll('.fade-target');
animator(fadeTarget, 'fade-animate');

const glowTarget = document.querySelectorAll('#adam');
animator(glowTarget, 'glow-animate');

const slideSideTarget = document.querySelectorAll('.slideSideTarget');
animator(slideSideTarget, "slideSideAnim");

const left = document.querySelectorAll(".left");
animator(left, "slam-anim");

const slideUpTarget = document.querySelectorAll(".slideUpTarget");
animator(slideUpTarget, "slideUpAnim");

const swingUpTarget = document.querySelectorAll(".swing-up-target");
animator(swingUpTarget, "swing-up-anim");

const scaleUpTarget = document.querySelectorAll("#scale-up-target");
animator(scaleUpTarget, "scale-up-anim");
