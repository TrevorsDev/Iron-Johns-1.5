/*Homepage ending image "Join Us" section*/

document.addEventListener("DOMContentLoaded", () => {
  console.log('Scroll effect is running')
  initScrollEffects();
  initBeerBanner();
});

function initScrollEffects() {
  const section = document.querySelector('.join-us');
  
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

/* Beer Banner — scroll-driven marquee */

function initBeerBanner() {
  const track1 = document.querySelector('.beer-banner__track:not(.beer-banner__track--reverse)');
  const track2 = document.querySelector('.beer-banner__track--reverse');
  if (!track1 || !track2) return;

  const halfWidth = track1.scrollWidth / 2;
  let pos = 0;
  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const delta = window.scrollY - lastY;
    lastY = window.scrollY;

    // Keep pos in range [0, halfWidth) so the loop is seamless
    pos = ((pos + delta * 0.5) % halfWidth + halfWidth) % halfWidth;

    track1.style.transform = `translateX(-${pos}px)`;           // scrolls left on scroll-down
    track2.style.transform = `translateX(${pos - halfWidth}px)`; // scrolls right on scroll-down
  }, { passive: true });
}


/* About Us page effects/interactivity*/
/*"Our History" section*/

