import { getItemProduct } from "../createHtml/cart.js"

export function allGames(data) {
    
    const allGames = document.querySelector(".games-item4");

    allGames.innerHTML = "";

    for (let i = 12 ; i < data.length; i++) {

        if (i === 15 ) {
            break;
        }
        allGames.innerHTML += `<div class="games-products">
                                    <img class="item-images" src="${data[i].thumbnail}"/>
                                    <h3>${data[i].title}</h3>
                                    <p>Let the gaming begin.</p>
                                    <span class="view-links">
                                        <a href="details.html?id=${data[i].id}" class="view-all">View Game</a>
                                    </span>
                                    </div>`; 
    }
};

export function ViewAllGames(data) {

    const games = document.querySelector(".games-item");

    games.innerHTML = "";

    for (let i = 0 ; i < data.length; i++) {

       const id = data[i].thumbnail
        const name = data[i].title

        if (i === 12 ) {
            break;
        }
        
        games.innerHTML += `<div class="games-products">
                                <img class="item-images" src="${data[i].thumbnail}"/>
                                <h3>${data[i].title}</h3>
                                <p>159,- nok</P>
                                <span class="about-link">
                                    <a href="details.html?id=${data[i].id}" class="pre-links">About</a>
                                </span>
                                <span class="cart-link">
                                    <button class="pre-links" data-id="${id}" data-title="${name}">Add to cart</button>
                                </span>
                            </div>`; 
    }
    
    const adButton = document.querySelectorAll(".pre-links");

    adButton.forEach((button) => {
        button.addEventListener("click", onClick);
    });
        
    function onClick() {
            const name = this.dataset.title;
            const id = this.dataset.id;
            
    
            console.log(id, name);

            const currentProduct = getItemProduct();
            console.log();

            const product = { id: id, name: name };

            currentProduct.push(product);

            saveProduct(currentProduct);
    } 
};

function saveProduct(item) {
    localStorage.setItem("adToCart", JSON.stringify(item))
}