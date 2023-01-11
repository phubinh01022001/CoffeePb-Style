const topMenu = document.getElementById('pb-top-menu')
const topMenuIcon = document.getElementById('pb-top-menu-icon')

document.addEventListener('click', (e) =>{
    if (topMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('pb-top-menu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        if(topMenu.classList.contains('pb-top-menu-expanded')){
            topMenu.classList.toggle('pb-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
