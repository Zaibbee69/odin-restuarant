import loadHome from "./pages/main.js";
import loadAbout from "./pages/about.js";
import loadMenu from "./pages/menu.js";


const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const menuBtn = document.getElementById("menu-btn");

document.addEventListener("DOMContentLoaded", () => loadHome());

homeBtn.addEventListener("click", () => {
    loadHome()
});

aboutBtn.addEventListener("click", () => {
    loadAbout();
})

menuBtn.addEventListener("click", () => {
    loadMenu();
})
