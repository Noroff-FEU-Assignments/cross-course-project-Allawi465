import { getItemProduct, saveProduct } from "../../localStorage/localStorage.js"

export function newDeals(data) {
    const newDeals = document.querySelector(".games-item3");

    newDeals.innerHTML = "";

    for (let i = 0 ; i < data.length; i++) {

        if (i === 3 ) {
            break;
        }

        newDeals.innerHTML += `<div class="games-products">
                                    <img class="item-images" src="${data[i].images[0].thumbnail}" alt="cover-image for the game"/>
                                    <h3>${data[i].name}</h3>
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

        const id = data[i].thumbnail
        const name = data[i].title

        if (i === 3 ) {
            break;
        }

           productContainer.innerHTML += `<div class="games-products">
                                                <img class="item-images" src="${data[i].images[0].thumbnail}" alt="cover-image for the game"/>
                                                <h3>${data[i].name}</h3>
                                                <p>159,- nok</P>
                                                <span class="about-link">
                                                    <a href="details.html?id=${data[i].id}" class="aboutLink">About</a>
                                                </span>
                                                <span class="cart-link">
                                                <button class="goCart" data-id="${id}" data-title="${name}">Add to cart</button>
                                                </span>
                                            </div>`; 
    };
        
    const adButton = document.querySelectorAll(".goCart");

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