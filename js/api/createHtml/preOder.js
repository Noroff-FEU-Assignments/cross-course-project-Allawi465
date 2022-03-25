export function commingSoon(data) {
    const commingSoon = document.querySelector(".games-item");

    commingSoon.innerHTML = "";

    for (let i = 0 ; i < data.length; i++) {

        if (i === 3) {
            break;
        }
        commingSoon.innerHTML += `<div class="games-products">
                                        <div class="item-images" style="background-image: url('${data[i].thumbnail}')"></div>
                                        <h3>${data[i].title}</h3>
                                        <p>Comming Soon</p>
                                        <span class="buttons-border">
                                        <button class="pre-order-button">PRE ORDER</button>
                                        </span>
                                    </div>`; 
    }
};

export function allPreOder(data) {

    const productContainer = document.querySelector(".gameViewAll-item");

    productContainer.innerHTML = "";

      for (let i = 0; i < data.length; i++) {

        if (i === 3) {
          break;
        }

        productContainer.innerHTML += `<div class="games-products">
                                            <div class="item-images" style="background-image: url('${data[i].thumbnail}')"></div>
                                            <h3>${data[i].title}</h3>
                                            <p>159,- nok</P>
                                            <span class="about-link">
                                            <a href="details.html?id=${data[i].id}" class="pre-links">About</a>
                                             </span>
                                            <span class="cart-link">
                                             <a href="#" class="pre-links">Add to cart</a>
                                            </span>
                                        </div>`; 
      }
};  