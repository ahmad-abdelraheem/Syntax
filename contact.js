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