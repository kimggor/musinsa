document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slidesToShow = 6;
  const slideWidth = 175; // Width of each card
  const slideMargin = 30; // Margin between cards
  const totalSlides = document.querySelectorAll(".slide-style-card").length;

  function updateSlidePosition() {
    const camera = document.querySelector(".flicking-camera");
    const newTransform = -currentIndex * (slideWidth + slideMargin);
    camera.style.transform = `translateX(${newTransform}px)`;
  }

  function nextSlide() {
    if (currentIndex < totalSlides - slidesToShow) {
      currentIndex++;
      updateSlidePosition();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  }

  document
    .querySelector(".slide-arrow.left")
    .addEventListener("click", prevSlide);
  document
    .querySelector(".slide-arrow.right")
    .addEventListener("click", nextSlide);
});
