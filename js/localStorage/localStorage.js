export function getItemProduct() {
    const item = localStorage.getItem("adToCart");

    if (item === null) {
        return [ ];
    } else {
        return JSON.parse(item);
    }
}

export function saveProduct(item) {
    localStorage.setItem("adToCart", JSON.stringify(item))
}


/* const productContainer = document.querySelector(".product-container");

const adToCart = getItemProduct();


if (adToCart.length === 0) {
    productContainer.innerHTML = "No favourites yet";
}

favourites.forEach(favourite => {
    productContainer.innerHTML += `<div class="product">
                                      <h3>${favourite.name}</h3>
                                      <i class="fa fa-heart"></i>
                                     </div>`;
}); */