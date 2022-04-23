import { getItemProduct, saveProduct } from "../localStorage/localStorage.js"   

const productContainer = document.querySelector(".cart-container");

const item = getItemProduct();

item.forEach(item => {
    productContainer.innerHTML += `<div class="cart-item">
                                    <div class="item-info"> 
                                        <img class="cartImages" src="${item.img}" alt="cover-image for ${item.name}"/>
                                    </div>
                                    <div class="unit-price">
                                        <small>${item.price},- NOK</small>
                                    </div>
                                    <div class="units">
                                        <div class="btn minus">-</div>
                                        <div class="number">${item.unit}</div>
                                        <div class="btn plus">+</div>           
                                    </div>
                                </div>`;
});