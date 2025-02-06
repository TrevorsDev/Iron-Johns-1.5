/*Homepage ending image "Join Us" section*/

document.addEventListener("DOMContentLoaded", () => {
  console.log('Scroll effect is running')
  initScrollEffects();
});

function initScrollEffects() {
  const section = document.querySelector('.join-us-section');
  
  document.addEventListener('scroll', () => {
      // Retrieves the position of the .join-us-section relative to the viewport.
    const rect = section.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      section.classList.add('visible'); /* Add 'visible class for animations*/
    } else {
      section.classList.remove('visible'); /* Remove 'visible class if its out of view */
    }
  });
}

/* About Us page effects/interactivity*/
/*"Our History" section*/

