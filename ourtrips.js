const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


let currentSlideIndex = 0;


prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));


function changeSlide(direction) {
    currentSlideIndex += direction;

    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    
    updateSlider();
}


function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}


updateSlider();


const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const additionalContent = card.querySelector('.additional-content');

        
        additionalContent.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-card .read-more-btn');

    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.read-more-card');
            const additionalContent = card.querySelector('.additional-content');

            
            additionalContent.classList.toggle('show');
        });
    });
});