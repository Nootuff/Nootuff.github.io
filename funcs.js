// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


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

const fadeTarget = document.querySelectorAll('.fadeTarget');
animator(fadeTarget, 'fadeAnim');

const glowTarget = document.querySelectorAll('#adam');
animator(glowTarget, 'glowAnim');

const slideSideTarget = document.querySelectorAll('.slideSideTarget');
animator(slideSideTarget, "slideSideAnim");


const left = document.querySelectorAll('.left');
animator(left, "slam-anim");


const slideUpTarget = document.querySelectorAll(".slideUpTarget");
animator(slideUpTarget, "slideUpAnim");

const swingUpTarget = document.querySelectorAll(".swing-up-target");
animator(swingUpTarget, "swing-up-anim");

const scaleUpTarget = document.querySelectorAll("#scale-up-target");
animator(scaleUpTarget, "scale-up-anim");

//Might have to make something custom to make the observber look at the proficiency table itself to trigger the animation on the rows, they should trigger in sequence bottom one first. Maybe modify the animator above. Do you even need to?

/*
const colLeft = document.querySelectorAll('.col-left');
animator(colLeft, "colSlideLeftAnim");

const colRight = document.querySelectorAll('.col-right');
animator(colRight, "colSlideRightAnim");
*/
