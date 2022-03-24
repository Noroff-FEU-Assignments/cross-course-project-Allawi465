import { products } from "../data/products.js"

export function createHTMLDeals(products) {
    const productContainer = document.querySelector(".gameViewAll-item");

        for (let i = 6; i < products.length; i++) {

            if (i === 9) {
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

createHTMLDeals(products);