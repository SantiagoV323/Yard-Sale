const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); // se usa punto para clases y # para id
const burgerMenuIcon = document.querySelector('.menu'); 
const mobileMenu = document.querySelector('.mobile-menu');
const myOrderCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
myOrderCarrito.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    // Si my-order está abierto, cerrarlo al abrir menú
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
    navEmail.classList.toggle('selected'); // se usa toggle para agregar o quitar una clase. En este caso, se agrega la clase 'selected' al botón de menú.
}

// cerrar desktop menu al abrir my-order
const myOrder = document.querySelector('.navbar-shopping-cart');
myOrder.addEventListener('click', function () {
    desktopMenu.classList.add('inactive');
    navEmail.classList.remove('selected');
});

navEmail.addEventListener('mousedown', function (event) {
    // Evitar la selección de texto
    event.preventDefault();
});

document.addEventListener('click', function (event) { // esta línea crea un evento que recibe como parámetro el evento de click. function (event) es una función anónima que se ejecuta cuando se hace click en cualquier parte del documento. 'click' es el tipo de evento que se está escuchando
    const target = event.target; // esta línea obtiene el elemento en el que se hizo click
    const isNavEmail = target === navEmail || navEmail.contains(target); // esta línea verifica si el elemento en el que se hizo click es el botón de menú o si es un elemento hijo del botón de menú
    const isDesktopMenu = target === desktopMenu || desktopMenu.contains(target); // esta línea verifica si el elemento en el que se hizo click es el menú o si es un elemento hijo del menú

    if (!isNavEmail && !isDesktopMenu) { // esta línea verifica si el elemento en el que se hizo click no es el botón de menú ni el menú
        desktopMenu.classList.add('inactive'); // esta línea oculta el menú
    }
});

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    // Si my-order está abierto, cerrarlo al abrir menú
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
    // burgerMenuIcon.classList.toggle('selected');
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    
    // Si menú está abierto, cerrarlo al abrir my-order
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive');
}
