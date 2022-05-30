const menu = document.querySelector("#side-bar")
const menuLinks = document.querySelector(".nav-menu")
menu.addEventListener("click", ()=>{
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})