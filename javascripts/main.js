
const slider = document.getElementById('slider');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updatePagination() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-gray-800', index === currentIndex);
    });
}

nextButton.addEventListener('click', () => {
    if (currentIndex < dots.length - 1) {
        currentIndex++;
        slider.scrollBy({ left: 200, behavior: 'smooth' });
    }
    updatePagination();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.scrollBy({ left: -200, behavior: 'smooth' });
    }
    updatePagination();
});

// Initial pagination state
updatePagination();



const gallery = document.getElementById('video-gallery');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let scrollAmount = 0;

prevBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: -300, behavior: 'smooth' });
    scrollAmount -= 300;
});

nextBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
    scrollAmount += 300;
});


const prevButton1 = document.getElementById('prevButton');
const nextButton1 = document.getElementById('nextButton');
const sliderContainer = document.querySelector('.slider-container');
let index = 0;

function updateSlider() {
    const width = sliderContainer.clientWidth / document.querySelectorAll('.slider-item').length;
    sliderContainer.style.transform = `translateX(-${index * width}px)`;
}

prevButton1.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : document.querySelectorAll('.slider-item').length - 1;
    updateSlider();
});

nextButton1.addEventListener('click', () => {
    index = (index < document.querySelectorAll('.slider-item').length - 1) ? index + 1 : 0;
    updateSlider();
});

// Initialize slider
window.addEventListener('resize', updateSlider);
updateSlider();


// JavaScript for sliding functionality
function slide(direction) {
    const slider = document.querySelector('.slider-wrapper');
    const cardWidth = document.querySelector('.slider-wrapper > div').offsetWidth + 16; // card width + margin

    if (direction === 'left') {
        slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
}


// JavaScript for slider3 functionality
const slider3 = document.getElementById('slider3');
const dots3 = [document.getElementById('dot1'), document.getElementById('dot2'), document.getElementById('dot3')];
let currentIndex3 = 0;

function updateSlider3(index) {
    slider3.style.transform = `translateX(-${index * 100}%)`;
    dots3.forEach((dot, i) => {
        dot.classList.remove('bg-gray-800');
        if (i === index) {
            dot.classList.add('bg-gray-800');
        }
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex3 = (currentIndex3 === 0) ? dots3.length - 1 : currentIndex3 - 1;
    updateSlider3(currentIndex3);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex3 = (currentIndex3 === dots3.length - 1) ? 0 : currentIndex3 + 1;
    updateSlider3(currentIndex3);
});

updateSlider3(currentIndex3);
