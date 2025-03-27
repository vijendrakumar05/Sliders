const sliders = document.querySelectorAll('.slider');
let counter = 0;
const totalSlides = sliders.length;

sliders.forEach((slider, index) => {
  slider.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1; // Loop back to the last image
    }
    slideImage();
  }

const goNext = () => {
  counter++;
  if (counter >= totalSlides) {
    counter = 0; // Loop back to the first image
}
  slideImage();
}

const slideImage = () => {
  sliders.forEach((slider) => {
    slider.style.transform = `translateX(-${counter * 100}%)`;
  });
}

