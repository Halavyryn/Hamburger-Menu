const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("hamburger_active");
    navMenu.classList.toggle("nav-menu_active");
})

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click",()=>{
        hamburger.classList.remove("hamburger_active");
        navMenu.classList.remove("nav-menu_active");
    }))
