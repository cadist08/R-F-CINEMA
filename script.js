const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.arrow.right');
const prevButton = document.querySelector('.arrow.left');

let currentIndex = 0;

function updateSlider() {
    const slideWidth = document.querySelector('.film-item').clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < 2) { 
        currentIndex++;
        updateSlider();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) { 
        currentIndex--;
        updateSlider();
    }
});

