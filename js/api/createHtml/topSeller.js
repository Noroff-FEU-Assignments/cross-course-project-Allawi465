import { getItemProduct, saveProduct } from "../../localStorage/localStorage.js"

export function topSeller(data) {
    const topSeller = document.querySelector(".games-item2");

    topSeller.innerHTML = "";

    for (let i = 2 ; i < data.length; i++) {

        if (i === 5) {
            break;
        }

        topSeller.innerHTML += `<div class="games-products">
                                    <img class="item-images" src="${data[i].images[0].src}"/>
                                    <h3>${data[i].name}</h3>
                                    <p>Our top sellers game</p>
                                    <span class="view-links">
                                        <a href="details.html?id=${data[i].id}" class="view-all">View Game</a>
                                    </span>
                                </div>`; 
    }
};

export function allTopSeller(data) {
    const games = document.querySelector(".games-item");

    games.innerHTML = "";

    for (let i = 3 ; i < data.length; i++) {

        const image = data[i].images[0].src;
        const name = data[i].name;
        const price = data[i].prices.price
        const id = data[i].id;
        const unit = data[i].add_to_cart.minimum;
        
        if (i === 6 ) {
            break;
        }

        games.innerHTML += `<div class="games-products">
                                <img class="item-images" src="${data[i].images[0].src}"alt="cover-image for the game"/>
                                <h3>${data[i].name}</h3>
                                <p>${price},- NOK</P>
                                <span class="about-link">
                                    <a href="details.html?id=${data[i].id}" class="aboutLink">About</a>
                                </span>
                                <span class="cart-link">
                                    <button class="pre-links" data-img="${image}" data-title="${name}"  data-price="${price}" data-id="${id}" data-unit="${unit}">Add to cart</button>
                                </span>
                            </div>`;
    };

    const adButton = document.querySelectorAll(".pre-links");

    adButton.forEach((button) => {
        button.addEventListener("click", onClick);
    });
        
    function onClick() {
        const name = this.dataset.title;
        const image = this.dataset.img;
        const price = this.dataset.price;
        const id = this.dataset.id;
        const unit = this.dataset.unit;

        const currentProduct = getItemProduct();

        const ItemExists = currentProduct.find(function(item) {
            return item.name === name;
        })
    
        if (ItemExists === undefined) {
            const product = { name: name, img: image, price: price, id: id, unit: unit};
            currentProduct.push(product);
            saveProduct(currentProduct);
        } else {
            const newProduct = currentProduct.filter(item => item.id !== id);
            saveProduct(newProduct);
        }
    } 
};