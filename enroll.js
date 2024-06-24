const rightCover = document.getElementById('right-cover')
const cover = document.getElementById('cover')
const leftCover = document.getElementById('left-cover')
const screenWidth = window.innerWidth;

document.addEventListener('DOMContentLoaded', async ()=> {
    await setTimeout(()=> {
        rightCover.style.filter = 'blur(1px)'
        leftCover.style.filter = 'blur(1px)'
        rightCover.style.transform = 'translateX(100vw)'
        leftCover.style.transform = 'translateX(-100vw)'
        setTimeout(()=> {
            document.getElementById('cover').style.zIndex = '-1'
            cover.remove();
        }, 2000)
    }, 1000)
})
        
function updateImageSrc() {
    if (screenWidth < 450) {
        leftCover.src = './img/cover/sm-left.png';
        rightCover.src = './img/cover/sm-right.png';
    } else if (screenWidth < 750) {
        leftCover.src = './img/cover/md-left.png';
        rightCover.src = './img/cover/md-right.png';
    } else if (screenWidth < 1100) {
        leftCover.src = './img/cover/lg-left.png';
        rightCover.src = './img/cover/lg-right.png';
    } else {
        leftCover.src = './img/cover/xl-left.png';
        rightCover.src = './img/cover/xl-right.png';
    } 
}
    
updateImageSrc();
    
window.addEventListener('resize', updateImageSrc);

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