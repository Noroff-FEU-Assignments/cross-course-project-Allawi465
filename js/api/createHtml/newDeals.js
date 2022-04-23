import { getItemProduct, saveProduct } from "../../localStorage/localStorage.js"

export function newDeals(data) {
    const newDeals = document.querySelector(".games-item3");

    newDeals.innerHTML = "";

    for (let i = 0 ; i < data.length; i++) {

        if (i === 3 ) {
            break;
        }

        newDeals.innerHTML += `<div class="games-products">
                                    <a href="details.html?id=${data[i].id}" class="imglink"> 
                                        <img class="item-images" src="${data[i].images[0].src}" alt="cover-image for the game"/>
                                        <h3>${data[i].name}</h3>
                                    </a>
                                    <p>check our new deal.</p>
                                    <span class="view-links">
                                        <a href="details.html?id=${data[i].id}" class="view-all">View Game</a>
                                    </span>
                                </div>`; 
    }
};

export function allDeals(data) {
    const productContainer = document.querySelector(".games-item");

    productContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        const image = data[i].images[0].src;
        const name = data[i].name;
        const price = data[i].prices.price;
        const id = data[i].id;
        const unit = data[i].add_to_cart.minimum;
        

        if (i === 3 ) {
            break;
        }

           productContainer.innerHTML += `<div class="games-products">
                                                <a href="details.html?id=${data[i].id}" class="imglink"> 
                                                    <img class="item-images" src="${data[i].images[0].src}"alt="cover-image for the game"/>
                                                    <h3>${data[i].name}</h3>
                                                    <p>${price},- NOK</P>
                                                </a>
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

        if (this.innerHTML === "Add to cart") {
            this.innerHTML = "Added to cart";
        } else {
            this.innerHTML = "Add to cart";
        }

        const currentProduct = getItemProduct();

        const ItemExists = currentProduct.find(function(item) {
            if (item.id === id) {
                return item.id === id;
            }
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