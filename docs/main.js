const buttonToggle = document.getElementById("menuToggle")
const buttonClose = document.getElementById("menuClose")
const menuNav = document.getElementById("menuNav")

buttonToggle.addEventListener('click',()=>
{menuNav.classList.add('visible')})
buttonClose.addEventListener('click',()=>
{menuNav.classList.remove('visible')})