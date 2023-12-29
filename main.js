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
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: 800,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Phone',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/1/pexels-photo-1.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Headphones',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/2/pexels-photo-2.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/3/pexels-photo-3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/4/pexels-photo-4.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Smartwatch',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/5/pexels-photo-5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Tablet',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/6/pexels-photo-6.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Keyboard',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/7/pexels-photo-7.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Mouse',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/8/pexels-photo-8.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Table',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/9/pexels-photo-9.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Chair',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/10/pexels-photo-10.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Watch',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/11/pexels-photo-11.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Sofa',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/12/pexels-photo-12.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Book',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/13/pexels-photo-13.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Glasses',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/14/pexels-photo-14.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Backpack',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/15/pexels-photo-15.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Plant',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/16/pexels-photo-16.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Candle',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/17/pexels-photo-17.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Clock',
    price: Math.floor(Math.random() * 1000) + 1,
    image: 'https://images.pexels.com/photos/18/pexels-photo-18.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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