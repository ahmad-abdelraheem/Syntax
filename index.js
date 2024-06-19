// Function to check if an element is in the viewport
function isInViewport(element) {
    console.log('test 1')
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'visible' class to elements in the viewport
function checkElementsInViewport() {
    console.log('test 2')
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (isInViewport(element)) {
            console.log
            element.classList.add('visible');
        }
    });
}

// Event listeners for scrolling and resizing
window.addEventListener('scroll', checkElementsInViewport);
window.addEventListener('resize', checkElementsInViewport);

// Initial check when the page loads
window.addEventListener('load', checkElementsInViewport);
