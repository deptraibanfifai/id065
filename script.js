let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slider img");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(${-currentSlide * 800}px)`;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

showSlide(currentSlide);


