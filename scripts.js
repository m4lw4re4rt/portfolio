document.addEventListener('DOMContentLoaded', () => {
  // Add glitch interactivity
  const glitchText = document.querySelector('.glitch');
  
  function randomizeGlitch() {
    const glitchEffect = Math.random() > 0.5 ? 'before' : 'after';
    const newClip = `rect(${Math.random() * 20}px, 9999px, ${Math.random() * 30 + 20}px, 0)`;
  
    glitchText.style.setProperty(`--clip-${glitchEffect}`, newClip);
    setTimeout(randomizeGlitch, Math.random() * 500 + 200);
  }
  
  randomizeGlitch();
});

document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery a');

  galleryItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      lightbox.style.display = 'flex';
      lightboxImg.src = this.href;
      lightboxCaption.textContent = this.getAttribute('data-title');
    });
  });

  lightboxClose.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});