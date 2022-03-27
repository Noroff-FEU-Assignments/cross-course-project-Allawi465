import { getItemProduct, saveProduct } from "../../localStorage/localStorage.js"

export function topSeller(data) {
    const topSeller = document.querySelector(".games-item2");

    topSeller.innerHTML = "";

    for (let i = 6 ; i < data.length; i++) {

        if (i === 9 ) {
            break;
        }
        topSeller.innerHTML += `<div class="games-products">
                                    <img class="item-images" src="${data[i].thumbnail}"/>
                                    <h3>${data[i].title}</h3>
                                    <p>Our top sellers game</p>
                                    <span class="buttons-border">
                                        <button class="pre-order-button">Buy Now</button>
                                    </span>
                                </div>`; 
    }
};

export function allTopSeller(data) {
    const games = document.querySelector(".games-item");

    games.innerHTML = "";

    for (let i = 6 ; i < data.length; i++) {

        const id = data[i].thumbnail
        const name = data[i].title

        if (i === 9 ) {
            break;
        }

        games.innerHTML += `<div class="games-products">
                                <img class="item-images" src="${data[i].thumbnail}"/>
                                <h3>${data[i].title}</h3>
                                <p>159,- nok</P>
                                <span class="about-link">
                                    <a href="href="details.html?id=${data[i].id}" class="pre-links">About</a>
                                </span>
                                <span class="cart-link">
                                    <button class="pre-links" data-id="${id}" data-title="${name}">Add to cart</button>
                                </span>
                            </div>`;
    };

    const adButton = document.querySelectorAll(".pre-links");

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