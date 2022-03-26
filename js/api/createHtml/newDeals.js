export function newDeals(data) {
    const newDeals = document.querySelector(".games-item3");

    newDeals.innerHTML = "";

    for (let i = 9 ; i < data.length; i++) {

        if (i === 12 ) {
            break;
        }

        newDeals.innerHTML += `<div class="games-products">
                                    <img class="item-images" src="${data[i].thumbnail}"/>
                                    <h3>${data[i].title}</h3>
                                    <p>check our new deal.</p>
                                    <span class="view-links">
                                        <a href="details.html?id=${data[i].id}" class="view-all">View Game</a>
                                    </span>
                                </div>`; 
    }
};

export function allDeals(data) {
    const productContainer = document.querySelector(".games-item");

    for (let i = 9 ; i < data.length; i++) {

        if (i === 12 ) {
            break;
        }

           productContainer.innerHTML += `<div class="games-products">
                                                <img class="item-images" src="${data[i].thumbnail}"/>
                                                <h3>${data[i].title}</h3>
                                                <p>159,- nok</P>
                                                <span class="about-link">
                                                    <a href="href="details.html?id=${data[i].id}" class="pre-links">About</a>
                                                </span>
                                                <span class="cart-link">
                                                <button href=" "class="pre-links">Add to cart</button>
                                               </span>
                                            </div>`; 
        }
};