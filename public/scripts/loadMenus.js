document.querySelectorAll('.menu-button').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    fetch(target)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => {
        document.querySelector('.menu-content-container').innerHTML = data;
      })
      .catch(error => {
        console.error('Error fetching menu content:', error);
        document.querySelector('.menu-content-container').innerHTML = '<p>Sorry, there was an error loading the menu. Please try again later.</p>';
      });
  });
});
