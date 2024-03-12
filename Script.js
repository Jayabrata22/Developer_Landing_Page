document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const cardsContainer = document.querySelector('.skillpart');

    let currentIndex = 0;
    const cardWidth = cardsContainer.querySelector('.grid-item').offsetWidth;
    const numVisibleCards = 3;

    function updateButtons() {
        prevButton.disabled = currentIndex <= 0;
        nextButton.disabled = currentIndex >= cardsContainer.children.length - numVisibleCards;
    }

    function scrollCards(direction) {
        const increment = direction === 'next' ? -cardWidth : cardWidth;
        currentIndex += increment;
        cardsContainer.style.transform = `translateX(${currentIndex}px)`;
        updateButtons();
    }

    prevButton.addEventListener('click', () => scrollCards('prev'));
    nextButton.addEventListener('click', () => scrollCards('next'));
    prevButton.addEventListener('click', function() {
        cardsContainer.scrollBy({
            left: -300, // Adjust this value based on the width of your cards
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        cardsContainer.scrollBy({
            left: 300, // Adjust this value based on the width of your cards
            behavior: 'smooth'
        });
    });

    updateButtons();
});
