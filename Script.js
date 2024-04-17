const list = document.querySelector(".skillpart");
const item = document.querySelector(".grid-item");
const itemWidth = item.offsetWidth;
const containerWidth = document.querySelector('.scrollable-container').offsetWidth;

function handleClick(direction) {
    console.log('previous')
    if (direction === 'previous') {
        // Calculate the distance to scroll back
        const scrollDistance = Math.max(0, list.scrollLeft - containerWidth);
        list.scrollTo({ left: scrollDistance, behavior: "smooth" });
    } else {
        console.log('next')
        // Calculate the distance to scroll forward
        const scrollDistance = Math.min(list.scrollLeft + containerWidth, list.scrollWidth - containerWidth);
        list.scrollTo({ left: scrollDistance, behavior: "smooth" });
    }
}
//Javscrpit