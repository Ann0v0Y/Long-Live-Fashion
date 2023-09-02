const imageGallery = document.querySelector('.scroll-images');
const imageWrappers = document.querySelectorAll('.child');
let currentIndex = 0;
let isTransitioning = false;

function scrollToNextImage() {
  if (isTransitioning) return;
  isTransitioning = true;

  currentIndex = (currentIndex + 1) % imageWrappers.length;
  const nextImage = imageWrappers[currentIndex];
  const scrollLeft = nextImage.offsetLeft - (imageGallery.clientWidth - nextImage.clientWidth) / 2;
  imageGallery.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });

  setTimeout(() => {
    isTransitioning = false;
  }, 800); // Adjust the duration of the transition here (in milliseconds)
}

imageGallery.addEventListener('scroll', () => {
  const currentImage = imageWrappers[currentIndex];
  const scrollTop = imageGallery.scrollTop;
  const imageTop = currentImage.offsetTop;
  const imageHeight = currentImage.clientHeight;

  if (scrollTop >= imageTop + imageHeight) {
    scrollToNextImage();
  }
});

// Start the image switching loop
setInterval(scrollToNextImage, 5000);