import { products } from "../data/products.js"

export function createHTMLPreOder(products) {
      const productContainer = document.querySelector(".gameViewAll-item");

        for (let i = 0; i < products.length; i++) {

          if (i === 3) {
            break;
          }

          productContainer.innerHTML += `<div class="games-products">
                                            <img class="item-images"
                                             src="${products[i].image}"/>
                                            <h2>${products[i].name}</h2>
                                            <h3>${products[i].status}</h3>
                                            <p>${products[i].price}</P>
                                            <span class="about-link">
                                            <a href="details.html?id=${products[i].id}" class="pre-links">About</a>
                                             </span>
                                            <span class="cart-link">
                                             <a href="" class="pre-links">Add to cart</a>
                                            </span>
                                        </div>`; 
        }
};

createHTMLPreOder(products);