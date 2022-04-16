import { getItemProduct, saveProduct } from "../../localStorage/localStorage.js"

export function createHTMLDetails(data) {
    const productContainer = document.querySelector(".games-details");
    const image = data.images[0].thumbnail
    const name = data.name

    productContainer.innerHTML = `<div class="games-products">
                                    <img class="item-images" src="${data.images[0].thumbnail}" alt="cover-image for the game"/>
                                    <h2>${data.name}</h2>
                                    <span class="cart-link">
                                       <button class="addToCart" data-id="${image}" data-title="${name}">Add to cart</button>
                                    </span>
                                    <span class="trade-link">
                                       <a href="trade.html" class="aboutLink">Trade in</a>
                                    </span>
                                    <h3>Product Description</h3>
                                    <p class="product-description">${data.description}</p>
                                    <h3> Specifications </h3>
                                    <p class="gameplay">Gameplay</p>
                                    <div class="Specifications-p">
                                       <p class="gameplay-p">Number of players</p>
                                       <p class="gameplay-p2">1-2</p>
                                    </div>
                                    <div class="Specifications-p">
                                       <p class="gameplay-p">Online Mulitplayer</p>
                                       <p class="gameplay-p2">2-4</p>
                                    </div>
                                    <div class="Specifications-p">
                                       <p class="gameplay-p">Number of Online Players</p>
                                       <p class="gameplay-p2">10-12</p>
                                    </div>
                                 </div>`;

        const adButton = document.querySelectorAll(".addToCart");

        adButton.forEach((button) => {
            button.addEventListener("click", onClick);
        });

        
        function onClick() {
        const name = this.dataset.title;
        const id = this.dataset.id;
    
        const currentProduct = getItemProduct();
    
        const ItemExists = currentProduct.find(function(item) {
                return item.name === name;
        })
        
        if (ItemExists === undefined) {
            const product = { name: name, id: id };
            currentProduct.push(product);
            saveProduct(currentProduct);
        } else {
            const newProduct = currentProduct.filter(item => item.id !== id);
            saveProduct(newProduct);
        }
    }

};
