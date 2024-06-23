function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
    );
}

function checkElementsInViewport() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkElementsInViewport);
window.addEventListener('resize', checkElementsInViewport);
document.addEventListener('DOMContentLoaded', checkElementsInViewport); // Initial check when the DOM is fully loaded 
//////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
    const feedbackCarousel = document.getElementById('message-container');
    const prevBtn = document.getElementById('prev-button');
    const nextBtn = document.getElementById('next-button');

    let cardWidth = 0; // Initialize card width
    let numVisibleCards = 0; // Initialize number of visible cards
    let scrollAmount = 0; // Initialize scroll amount
    let autoScrollInterval; // Variable to hold the interval for auto scrolling
    const autoScrollDelay = 5000; // Auto scroll delay in milliseconds (5 seconds)

    function calculateVisibleCards() {
        // Get the first carousel card to calculate its width
        const firstCard = feedbackCarousel.querySelector('.carousel-card');
        if (firstCard) {
            const cardStyle = window.getComputedStyle(firstCard); // Get computed styles
            cardWidth = firstCard.offsetWidth + 
                        parseFloat(cardStyle.marginLeft) + 
                        parseFloat(cardStyle.marginRight) +
                        parseFloat(getComputedStyle(feedbackCarousel).gap); // include gap

            // Calculate number of visible cards
            numVisibleCards = Math.floor(feedbackCarousel.clientWidth / cardWidth);
        }
    }

    function startAutoScroll() {
        stopAutoScroll(); // Stop any existing auto scroll interval
        autoScrollInterval = setInterval(() => {
            // Increase scroll amount by card width times number of cards to move
            scrollAmount += cardWidth;
            // Check if scroll amount exceeds maxScroll, then scroll to the first card
            if (scrollAmount > feedbackCarousel.scrollWidth - feedbackCarousel.clientWidth) {
                scrollAmount = 0;
            }
            // Apply transform to slide cards to the right
            feedbackCarousel.style.transform = `translateX(-${scrollAmount}px)`;
        }, autoScrollDelay);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        stopAutoScroll(); // Stop auto scrolling when manually navigating
        // Decrease scroll amount by card width times number of cards to move
        scrollAmount -= cardWidth;
        // Adjust scroll amount to ensure circular scrolling
        if (scrollAmount < 0) {
            scrollAmount = feedbackCarousel.scrollWidth - feedbackCarousel.clientWidth;
        }
        // Apply transform to slide cards to the left
        feedbackCarousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    nextBtn.addEventListener('click', () => {
        stopAutoScroll(); // Stop auto scrolling when manually navigating
        // Increase scroll amount by card width times number of cards to move
        scrollAmount += cardWidth;
        // Check if scroll amount exceeds maxScroll, then scroll to the first card
        if (scrollAmount > feedbackCarousel.scrollWidth - feedbackCarousel.clientWidth) {
            scrollAmount = 0;
        }
        // Apply transform to slide cards to the right
        feedbackCarousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    // Initial calculation on page load
    calculateVisibleCards();

    // Calculate the maximum scrollable width
    const maxScroll = feedbackCarousel.scrollWidth - feedbackCarousel.clientWidth;

    // Start auto scrolling on page load
    startAutoScroll();

    // Recalculate visible cards on window resize
    window.addEventListener('resize', calculateVisibleCards);

    // Stop auto scrolling when hovering over carousel
    feedbackCarousel.addEventListener('mouseenter', stopAutoScroll);
    feedbackCarousel.addEventListener('mouseleave', startAutoScroll);
});


const colors = ['darkgoldenrod', 'midnightblue','darkmagenta', 'darkslategray', 'gray','darkslateblue', 'darkcyan']

document.addEventListener('DOMContentLoaded', () => {
    const courses = document.getElementsByClassName('course')
    const length = courses.length
    for (let i = 0 ; i < length ; i ++){
        courses[i].style.backgroundColor = colors[i%colors.length]
    }
})

const menuToggleBTN = document.getElementById('menu-toggle')
const dropdownNavbar = document.getElementById('dropdown-navbar')

menuToggleBTN.addEventListener('click', ()=> {
    if (dropdownNavbar.style.width == '0vw' || dropdownNavbar.style.width == ''){
        dropdownNavbar.style.width = '100vw';
        menuToggleBTN.classList.add('clicked')
        setTimeout(()=>{
            menuToggleBTN.innerHTML = '<i class="bi bi-x-lg"></i>'
        }, 250)
        setTimeout(()=>{
            menuToggleBTN.classList.remove('clicked')
        }, 500)
    } else {
        dropdownNavbar.style.width = '0vw';
        menuToggleBTN.classList.add('clicked')
        setTimeout(()=>{
            menuToggleBTN.innerHTML = '<i class="bi bi-list">'
        }, 250)
        setTimeout(()=>{
            menuToggleBTN.classList.remove('clicked')
        }, 500)
    }
})