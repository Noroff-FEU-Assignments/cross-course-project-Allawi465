import { products } from "../data/products.js"

export function createHTML(products) {
    const productContainer = document.querySelector(".games-item");

        for (let i = 3; i < products.length; i++) {

            if (i === 6) {
                break;
            }

           productContainer.innerHTML += `<div class="games-products">
                                            <img class="item-images"
                                             src="${products[i].image}"/>
                                            <h2>${products[i].name}</h2>
                                            <p>${products[i].price}</P>
                                            <span class="about-link">
                                            <a href="about-games.html" class="pre-links">About</a>
                                             </span>
                                            <span class="cart-link">
                                             <a href="#" class="pre-links">Add to cart</a>
                                            </span>
                                        </div>`; 
        }
};

createHTML(products);