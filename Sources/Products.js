let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Turtle Bubble',
        image: 'Turtle Bubble.png',
        price: 10
    },
    {
        id: 2,
        name: 'Turtle Cookies',
        image: 'Turtle Cookies.jpg',
        price: 5
    },
    {
        id: 3,
        name: 'Turtle Donnut',
        image: 'Turtle Donnut.jpg',
        price: 5
    },
    {
        id: 4,
        name: 'Turtle Flower Original',
        image: 'Turtle Flower Original.jpg',
        price: 10
    },
    {
        id: 5,
        name: 'Turtle Flower',
        image: 'Turtle Flower.png',
        price: 10
    },
    {
        id: 6,
        name: 'Turtle lattee',
        image: 'Turtle lattee.png',
        price: 10
    },
    {
        id: 6,
        name: 'Turtle Macoroons',
        image: 'Turtle Macoroons.jpg',
        price: 5
    },
    {
        id: 6,
        name: 'Turtle Mini Cake',
        image: 'Turtle Mini Cake.png',
        price: 5
    },
    {
        id: 6,
        name: 'Turtle Mocha',
        image: 'Turtle Mocha.png',
        price: 10
    },
    {
        id: 6,
        name: 'Turtle Wind',
        image: 'Turtle Wind.png',
        price: 10
    },
    {
        id: 6,
        name: 'Black Turtle',
        image: 'Black Turtle.png',
        price: 10
    },
    {
        id: 6,
        name: 'Green Coffee Beans',
        image: 'Green Coffee Beans.jpg',
        price: 10
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="imageS2/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="imageS2/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = '$'+ totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}