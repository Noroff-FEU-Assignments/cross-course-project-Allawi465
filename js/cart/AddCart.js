import { getItemProduct, saveProduct } from "../localStorage/localStorage.js"   

const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});

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
                                        <img class="cartImages" src="${item.id}"/>
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