// Govt.Laboratory Model Higher Secondary School Website JavaScript

console.log("Welcome to Govt.Laboratory Model Higher Secondary School Website!");

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website is ready!");

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");

            const isOpen = mainNav.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

    }

});
// ===== Back to Top Button =====
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});