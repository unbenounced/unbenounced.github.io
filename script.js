  // Select all elements with the class .row
  const sliders = document.querySelectorAll('.row');

  sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragged = false;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      isDragged = false; // Reset isDragged flag
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });

    slider.addEventListener('mouseup', (e) => {
      isDown = false;
      // If the slider was dragged, prevent default action
      if (isDragged) {
        e.preventDefault();
      }
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      isDragged = true; // Set isDragged flag
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });

    // Prevent link navigation when slider is being dragged
    slider.addEventListener('click', (e) => {
      if (isDragged) {
        e.preventDefault();
      }
    });
  });
