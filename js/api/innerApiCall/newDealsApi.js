import { allDeals } from "../createHtml/newDeals.js";

const messageCotainer = document.querySelector(".error-message");

const url = fetch("https://wildflowerpower.site/gamehub/wp-json/wc/store/products");

async function getGames() {

    try {
        const response = await url;
        
        const data = await response.json();

        allDeals(data)
        
    } catch(error) {
        messageCotainer.innerHTML = `<p> An error occurred when showing the Games</p>`
    }
};

getGames()