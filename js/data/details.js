import { products } from "../data/products.js"

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productContainer = document.querySelector(".games-item");

function createHtml(products) {

    productContainer.innerHTML = `<div class="games-products">
                                 <img class="item-images"
                                 src="${products.image}"/>
                                 <h2>${products.name}</h2>
                                 <p class="comming-soon-p">Comming Soon</p>
                                 <span class="cart-link">
                                 <a href="#">Add to cart</a>
                                 </span>
                                 <span class="trade-link">
                                 <a href="#">Trade in</a>
                                 </span>
                                 <h3>Product Description</h3>
                                 <p class="product-description">${products.description}</p>
                                 <h3>Specifications</h3>
                                 <p class="gameplay">Gameplay</p>
                                 <div class="Specifications-p">
                                 <p class="gameplay-p">Number of players</p>
                                 <p class="gameplay-p2">${products.players}</p>
                                 </div>
                                 <div class="Specifications-p">
                                 <p class="gameplay-p">Number of Online Players</p>
                                 <p class="gameplay-p2">${products.OnlinePlayers}</p>
                                 </div>
                                </div>`;
};

createHtml(products);