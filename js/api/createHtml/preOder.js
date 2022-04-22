import { getItemProduct, saveProduct } from "../../localStorage/localStorage.js"

export function commingSoon(data) {
  const commingSoon = document.querySelector(".games-item");

  commingSoon.innerHTML = "";

    for (let i = 6 ; i < data.length; i++) {

    commingSoon.innerHTML += `<div class="games-products">
                                    <img class="item-images" src="${data[i].images[0].src}" alt="cover-image for the game"/>
                                    <h3>${data[i].name}</h3>
                                    <p>Comming Soon</p>
                                    <span class="view-links">
                                        <a href="details.html?id=${data[i].id}" class="view-all">View Game</a>
                                    </span>
                                  </div>`; 
  }
};

export function allPreOder(data) {

  const productContainer = document.querySelector(".games-item");

  productContainer.innerHTML = "";

  for (let i = 6; i < data.length; i++) {

    const image = data[i].images[0].src;
    const name = data[i].name;
    const price = data[i].price;

    productContainer.innerHTML += `<div class="games-products">
                                          <img class="item-images" src="${data[i].images[0].src}" alt="cover-image for the game"/>
                                          <h3>${data[i].name}</h3>
                                          <p>${data[i].price},- NOK</P>
                                          <span class="about-link">
                                            <a href="details.html?id=${data[i].id}" class="aboutLink">About</a>
                                          </span>
                                          <span class="cart-link">
                                            <button class="pre-links" data-img="${image}" data-title="${name}"  data-price="${price}">Add to cart</button>
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

      const currentProduct = getItemProduct();

      const ItemExists = currentProduct.find(function(item) {
          return item.name === name;
      })
    
      if (ItemExists === undefined) {
          const product = { name: name, img: image, price: price};
          currentProduct.push(product);
          saveProduct(currentProduct);
      } else {
        const newProduct = currentProduct.filter(item => item.id !== id);
        saveProduct(newProduct);
      }     
    } 
};  