const burger =  document.getElementById('burger')
const linkList = document.getElementById('link-list')

function toggleMenu() {
    linkList.classList.toggle('link-list-visible')
    burger.classList.toggle('burger-in-x-form')
}


burger.addEventListener('click', toggleMenu)
