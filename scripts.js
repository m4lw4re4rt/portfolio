// Add glitch interactivity
document.addEventListener('DOMContentLoaded', () => {
    const glitchText = document.querySelector('.glitch');
  
    function randomizeGlitch() {
      const glitchEffect = Math.random() > 0.5 ? 'before' : 'after';
      const newClip = `rect(${Math.random() * 20}px, 9999px, ${Math.random() * 30 + 20}px, 0)`;
  
      glitchText.style.setProperty(`--clip-${glitchEffect}`, newClip);
      setTimeout(randomizeGlitch, Math.random() * 500 + 200);
    }
  
    randomizeGlitch();
  });

  const imgContent = document.querySelectorAll('.img-content-hover');

  function showImgContent(e) {
    for(var i = 0; i < imgContent.length; i++) {
      x = e.pageX;
      y = e.pageY;
      imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };
  
  document.addEventListener('mousemove', showImgContent);

  // JavaScript for Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const images = [
      ...carousel.querySelectorAll('img')
    ];
    let currentIndex = 0;

    // Initialize buttons
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    // Helper function to show the current image
    const showImage = (index) => {
      images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
      });
    };

    // Event listeners for navigation
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      showImage(currentIndex);
    });

    // Initialize carousel
    showImage(currentIndex);
  });
});
