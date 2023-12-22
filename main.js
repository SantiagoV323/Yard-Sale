const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); // se usa punto para clases y # para id


navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    navEmail.classList.toggle('selected');
}

navEmail.addEventListener('mousedown', function (event) {
    // Evitar la selección de texto
    event.preventDefault();
});

document.addEventListener('click', function (event) {
    const target = event.target;
    const isNavEmail = target === navEmail || navEmail.contains(target);
    const isDesktopMenu = target === desktopMenu || desktopMenu.contains(target);

    if (!isNavEmail && !isDesktopMenu) {
        desktopMenu.classList.add('inactive');
    }
});