document.addEventListener('DOMContentLoaded', () => {
    const burgerMenuButton = document.querySelector('.open-burger-menu');

    if (!burgerMenuButton) {
        return;
    }

    const burgerMenu = document.querySelector('.burger-menu-content');

    if (!burgerMenu) {
        return;
    }

    const burgerCloseButton = document.querySelector('.close-burger-menu');

    if (!burgerCloseButton) {
        return;
    }

    burgerMenuButton.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        burgerMenu.classList.add('burger-menu-content--visible')
    });

    burgerCloseButton.addEventListener('click', () => {
        document.body.style.overflow = '';
        burgerMenu.classList.remove('burger-menu-content--visible')
    });
});