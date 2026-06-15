document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const mainNav = document.querySelector('.main-nav');

    if (burgerBtn && mainNav) {
        burgerBtn.addEventListener('click', () => {
            // Toggles the "X" animation on the button
            burgerBtn.classList.toggle('open');

            // Slides the menu drawer down
            mainNav.classList.toggle('active');
        });
    }
});