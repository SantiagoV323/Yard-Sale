const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); // se usa punto para clases y # para id
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const myOrderCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');



navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
myOrderCarrito.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    // Si my-order está abierto, cerrarlo al abrir menú
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
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
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    // Si my-order está abierto, cerrarlo al abrir menú
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
    // burgerMenuIcon.classList.toggle('selected');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')


    // Si menú está abierto, cerrarlo al abrir my-order
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive');
}

// Crear una función para agregar productos a un array para que se muestren en la página de inicio

const productList = [];
productList.push({
    name: 'Bike',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'TV',
    price: 400,
    image: 'https://images.samsung.com/is/image/samsung/assets/co/tvs/2022_Showcase_Card_Tab_Category_QLED_PC_aem_448x684.png?$448_684_PNG$'
});
productList.push({
    name: 'GPU',
    price: 800,
    image: 'https://images.pexels.com/photos/8622911/pexels-photo-8622911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Phone',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/2810580/pexels-photo-2810580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Headphones',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Smartwatch',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Tablet',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Keyboard',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/399160/pexels-photo-399160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Mouse',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502x-lightspeed/gallery/g502x-lightspeed-gallery-1-black.png?v=1'
});
productList.push({
    name: 'Table',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Chair',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Watch',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Sofa',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Book',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Glasses',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/185769/pexels-photo-185769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Backpack',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Plant',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Candle',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/6311832/pexels-photo-6311832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Clock',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/2182727/pexels-photo-2182727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


// recorrer el array productList para agregar los productos al index.html
function renderProducts(arr) {
    for (product of arr) {
        // console.log(product.name);
        const productCard = document.createElement('div'); // document.createElement crea un elemento HTML. En este caso, un div
        productCard.classList.add('product-card'); // paso por paso esta línea es: 1) obtener el elemento creado en la línea anterior, 2) agregarle la clase de html 'product-card'
        const productImg = document.createElement('img'); // crear un elemento img
        productImg.setAttribute('src', product.image); // asignarle el atributo src con el valor de la propiedad image del objeto product, o sea, agregarle un src a cada "image" del array productList
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        
        
        const productInfoCloseDiv = document.createElement('div');
    
        const productPrice = document.createElement('p'); // crear un elemento p
        productPrice.innerText = '$' + product.price; // asignarle texto al elemento p llamando el valor de la propiedad price del objeto product
        const productName = document.createElement('p');
        productName.innerText = product.name; // asignarle texto al elemento p llamando el valor de la propiedad name del objeto product
    
        productInfoCloseDiv.appendChild(productPrice);
        productInfoCloseDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src', './Icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoImg);
        
        productInfo.appendChild(productInfoCloseDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);