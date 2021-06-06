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

const proficiencyTable = document.querySelectorAll('.proficiency-table');
animator(proficiencyTable, "openAnim");

const slideUpTarget = document.querySelectorAll('.slideUpTarget');
animator(slideUpTarget, "slideUpAnim");

//Might have to make something custom to make the observber look at the proficiency table itself to trigger the animation on the rows, they should trigger in sequence bottom one first. Maybe modify the animator above. Do you even need to?

/*
const colLeft = document.querySelectorAll('.col-left');
animator(colLeft, "colSlideLeftAnim");

const colRight = document.querySelectorAll('.col-right');
animator(colRight, "colSlideRightAnim");
*/
