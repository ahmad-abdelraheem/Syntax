const rightCover = document.getElementById('right-cover')
        const leftCover = document.getElementById('left-cover')
        const screenWidth = window.innerWidth;

        document.addEventListener('DOMContentLoaded', ()=> {
            setTimeout(()=> {
                rightCover.style.filter = 'blur(1px)'
                leftCover.style.filter = 'blur(1px)'
                if (screenWidth < 450) {
                    rightCover.style.transform = 'translateX(45vw)'
                    leftCover.style.transform = 'translateX(-45vw)'
                } else if (screenWidth < 600) {
                    rightCover.style.transform = 'translateX(40vw)'
                    leftCover.style.transform = 'translateX(-40vw)'
                } else if (screenWidth < 800) {
                    rightCover.style.transform = 'translateX(35vw)'
                    leftCover.style.transform = 'translateX(-35vw)'
                } else {
                    rightCover.style.transform = 'translateX(30vw)'
                    leftCover.style.transform = 'translateX(-30vw)'
                }
                setTimeout(()=> {
                    document.getElementById('cover').style.zIndex = '-1'
                }, 2000)
            }, 1000)
        })
        
        function updateImageSrc() {
    
            if (screenWidth < 600) {
                leftCover.src = './img/smCodeCover-left.png';
                rightCover.src = './img/smCodeCover-right.png';
            } else {
                leftCover.src = './img/CodeCover-left.png';
                rightCover.src = './img/CodeCover-right.png';
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