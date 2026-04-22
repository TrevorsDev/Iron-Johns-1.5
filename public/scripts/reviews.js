/*
  reviews.js — Reviews carousel for the homepage.

  Behavior:
  - Auto-advances through review cards every 5 seconds
  - Dot buttons let the user jump to any card
  - Swiping left/right on touch devices moves between cards
  - Hovering pauses auto-advance on desktop
  - Any user interaction resets the 5-second timer

  How the carousel moves:
  The track (a flex row of cards) is shifted left using CSS transform.
  Each card is 100% wide, so moving by -100% * index lands exactly on that card.
  The CSS transition on the track makes it animate smoothly.
*/

(function () {

  // Grab the elements we need from the DOM
  const track = document.getElementById('reviewsTrack');
  const dotContainer = document.getElementById('reviewsDots');

  // If either element is missing, stop here — nothing to run
  if (!track || !dotContainer) return;

  const cards = track.querySelectorAll('.review-card');
  const dots = dotContainer.querySelectorAll('.reviews-section__dot');
  const total = cards.length;

  let current = 0;  // tracks which card is currently showing
  let autoTimer;    // holds the setInterval reference so we can clear it

  // Moves the carousel to a specific card index
  function goTo(index) {
    // Wrap around: going past the last card loops back to the first (and vice versa)
    current = (index + total) % total;

    // Shift the track left by (current * 100%) to reveal the right card
    track.style.transform = `translateX(-${current * 100}%)`;

    // Update dots — only the active one gets the highlighted style
    dots.forEach((dot, i) => {
      dot.classList.toggle('reviews-section__dot--active', i === current);
    });
  }

  // Starts the 5-second auto-advance timer
  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  // Stops the current timer and starts a fresh one
  // Used after any user interaction so the 5s countdown resets
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  // Clicking a dot jumps directly to that card and resets the timer
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      resetAuto();
    });
  });

  // Pause auto-advance while the user is hovering (desktop only)
  track.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.addEventListener('mouseleave', startAuto);

  // Touch swipe — record where the finger started
  let touchStartX = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    clearInterval(autoTimer); // pause while user is interacting
  }, { passive: true });

  // Touch swipe — on release, check how far and in what direction the finger moved
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    // Only register as a swipe if finger moved more than 50px
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    startAuto();
  }, { passive: true });

  // Kick off the auto-advance when the page loads
  startAuto();

})();
