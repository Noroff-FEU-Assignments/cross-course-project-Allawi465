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
                                        <div class="btn" onClick="('minus', ${item.id})">-</div>
                                        <div class="number">1</div>
                                        <div class="btn" onClick="('plus', ${item.id})">+</div>           
                                    </div>
                                </div>`;
});
