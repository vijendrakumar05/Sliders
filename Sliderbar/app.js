const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.images');

let sliderNumber = 1;
let length = images.length;



const bottom = document.querySelector('.bottom');

for(let i=0; i<length; i++){
    const div = document.createElement('div');
    div.className='button';
    bottom.appendChild(div);
};

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent';
    });
  }

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      resetBg();
        slider.style.transform = `translateX(-${index * 800}px)`;
        sliderNumber = index + 1;
        button.style.backgroundColor = 'white';
    });
});

const changeColor = () => {
    resetBg();
    buttons[sliderNumber-1].style.backgroundColor = 'white';
};



const nextSlider = () => {
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
    sliderNumber++;
}

const prevSlider = () => {
    slider.style.transform = `translateX(-${(sliderNumber-2) * 800}px)`;
    sliderNumber--;
}

const getFirstSlider = () => {
    slider.style.transform = `translateX($0px)`;
    sliderNumber = 1;
}

const getLastSlider = () => {
    slider.style.transform = `translateX(-${(length * 800)}px)`;
    sliderNumber = length;
}

rightArrow.addEventListener('click', () => {
  if(sliderNumber < length) {
    nextSlider();
  }else{
    getFirstSlider();
  }
    changeColor();
});

leftArrow.addEventListener('click', () => {
    if(sliderNumber > 1) {
      prevSlider();
    }else{
      getLastSlider();
    }
    changeColor();
  });

  let slideInterval;

    const startSlideShow = () => {
        slideInterval = setInterval(() => {
            if(sliderNumber < length) {
              nextSlider();
            }else{
              getFirstSlider();
            }
            changeColor();
        }, 1500);
    }

    const stopSlideShow = () => {
        clearInterval(slideInterval);
    }

    startSlideShow();

    slider.addEventListener('mouseover', () => {
        stopSlideShow();
    });

    slider.addEventListener('mouseout', () => { 
        startSlideShow();
    });

    rightArrow.addEventListener('mouseover', () => {
        stopSlideShow();
    });

    rightArrow.addEventListener('mouseout', () => { 
        startSlideShow();
    });

    leftArrow.addEventListener('mouseover', () => {
        stopSlideShow();
    });

    leftArrow.addEventListener('mouseout', () => { 
        startSlideShow();
    });

    bottom.addEventListener('mouseover', () => {
        stopSlideShow();
    });

    bottom.addEventListener('mouseout', () => {             
        startSlideShow();
    });