let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    displayCart();
}

function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.item}: $${product.price.toFixed(2)}`;
        cartElement.appendChild(li);
    });
    document.getElementById('total').textContent = total.toFixed(2);
}
