const menuBtn = document.getElementById('menu-btn');
const secondNavbar = document.getElementById('hidden-nav');

menuBtn.addEventListener('click', ()=> {
    if(secondNavbar.classList.contains('show')){
        menuBtn.innerHTML = '<i class="bi bi-list"></i>';
        secondNavbar.classList.remove('show')
    } else {
        menuBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
        secondNavbar.classList.add('show')
    }
})