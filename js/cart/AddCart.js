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
                                        <div class="btn" handleClick="('minus', ${item.id})">-</div>
                                        <div class="number">1</div>
                                        <div class="btn" handleClick="('plus', ${item.id})">+</div>           
                                    </div>
                                </div>`;
});

const unitButton = document.querySelectorAll(".btn");

unitButton.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick(action, id) {
   console.log("hei")
} 


/* function unit(action, id) {
    getItemProduct = getItemProduct.map((item) => {
        let unit = item.unit; 
    
        if (item.id === id) {
            if (action === "minus")
            units--;
        } else if (action === "plus") {
            units++;
        }
        return {
            ...item,
        };
    });
};  */