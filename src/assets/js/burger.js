//Burger functional
const burgerAnimation = (() => {

    //Connecting html elements into js
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".nav_links a");
    const navLink = document.querySelector(".nav_links");

    burger.addEventListener("click", () => {
        navLink.classList.toggle("nav_active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navBody 1 ease forwards ${index / 7 + .3}s`;
            }
        });

        burger.classList.toggle("burger_active");
    })
})();