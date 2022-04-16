import { getItemProduct, saveProduct } from "../localStorage/localStorage.js"   

const url = fetch("http://localhost/gamehub/wp-json/wc/store/products");

async function getTeams() {
    try {
        const response = await url

        const data = await response.json();

        console.log(data);
        
    } catch(error) {
        console.log(error);
        displayError("error", error, ".container");
    }
}

getTeams();

const productContainer = document.querySelector(".cart-container");
const title = document.querySelector("h1");

const item = getItemProduct();


if (item.length === 0) {
    title.innerHTML = "Your cart is empty";
}

item.forEach(item => {
    productContainer.innerHTML += `<div class="product">
                                        <img class="cartImages" src="${item.id}" alt="cover-image for the game"/>
                                        <p class="cart-title">${item.name}</p>
                                        <span class="price">159,- nok</span>
                                    </div>`;
});

const totalPrice = document.querySelector(".totalPrices");

const totalPrices = addThePrices();

function addThePrices() {
  return 159 * item.length;
}

totalPrice.innerHTML = totalPrices;