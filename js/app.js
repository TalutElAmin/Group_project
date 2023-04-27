const menuebar= document.getElementsByClassName("menu")
const navbar = document.getElementsByClassName("link_bar")
menuebar.addEventListener("click", ()=>{
    navbar.classList.toggle('active')
})