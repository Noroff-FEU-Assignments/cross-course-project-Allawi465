import { getItemProduct, saveProduct } from "../../localStorage/localStorage.js"

export function topSeller(data) {
    const topSeller = document.querySelector(".games-item2");

    topSeller.innerHTML = "";

    for (let i = 2 ; i < data.length; i++) {

        const id = data[i].images[0].src
        const name = data[i].name

        if (i === 5) {
            break;
        }

        topSeller.innerHTML += `<div class="games-products">
                                    <img class="item-images" src="${data[i].images[0].src}"/>
                                    <h3>${data[i].name}</h3>
                                    <p>Our top sellers game</p>
                                    <span class="buttons-border">
                                        <button class="buy-button" data-id="${id}" data-title="${name}">Buy Now</button>
                                    </span>
                                </div>`; 
    }

    const adButton = document.querySelectorAll(".buy-button");

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

export function allTopSeller(data) {
    const games = document.querySelector(".games-item");

    games.innerHTML = "";

    for (let i = 3 ; i < data.length; i++) {

        const id = data[i].images[0].src
        const name = data[i].name

        if (i === 6 ) {
            break;
        }

        games.innerHTML += `<div class="games-products">
                                <img class="item-images" src="${data[i].images[0].src}"alt="cover-image for the game"/>
                                <h3>${data[i].name}</h3>
                                <p>${data[i].price},- NOK</P>
                                <span class="about-link">
                                    <a href="details.html?id=${data[i].id}" class="aboutLink">About</a>
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