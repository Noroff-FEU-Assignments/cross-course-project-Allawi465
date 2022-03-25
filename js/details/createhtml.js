export function createHTMLDetails(data) {
    const productContainer = document.querySelector(".games-item");

    productContainer.innerHTML = `<div class="games-products">
            <img class="item-images"
            src="${data.thumbnail}"/>
            <h2>${data.title}</h2>
            <span class="cart-link">
            <a href="#">Add to cart</a>
            </span>
            <span class="trade-link">
            <a href="#">Trade in</a>
            </span>
            <h3>Product Description</h3>
            <p class="product-description">${data.short_description}</p>
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
            </div>`;

};