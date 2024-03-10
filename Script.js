document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const cardsContainer = document.querySelector('.cards-container');
    const cardWidth = document.querySelector('.skillcard').offsetWidth;
    let currentIndex = 0;

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= cardsContainer.children.length - 3;
    }

    function scrollCards(direction) {
        const increment = direction === 'next' ? -cardWidth : cardWidth;
        currentIndex += increment;
        cardsContainer.style.transform = `translateX(${currentIndex}px)`;
        updateButtons();
    }

    prevButton.addEventListener('click', () => scrollCards('prev'));
    nextButton.addEventListener('click', () => scrollCards('next'));

    updateButtons();
});
