import { getItemProduct, saveProduct } from "../localStorage/localStorage.js"   

const productContainer = document.querySelector(".cart-container");
const title = document.querySelector("h1");

const item = getItemProduct();


item.forEach(item => {
    productContainer.innerHTML += `<div class="cart-item">
                                    <div class="item-info"> 
                                        <h4>${item.name}</h4>
                                        <img class="cartImages" src="${item.img}" alt="cover-image for the game"/>
                                    </div>
                                    <div class="unit-price">
                                        <small>${item.price},- NOK</small>
                                    </div>
                                    <div class="units">
                                        <div class="btn minus">-</div>
                                        <div class="number">1</div>
                                        <div class="btn plus">+</div>           
                                    </div>
                                </div>`;
                            });