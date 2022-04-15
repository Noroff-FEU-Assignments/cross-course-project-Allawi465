import { allGames } from "./createHtml/allGames.js"
import { newDeals } from "./createHtml/newDeals.js";
import { topSeller } from "./createHtml/topSeller.js";
import { commingSoon } from "./createHtml/preOder.js";

const messageCotainer = document.querySelector(".error-message");

const url = fetch("http://localhost/gamehub/wp-json/wc/store/products");

async function getGames() {

    try {
        const response = await url;
        
        const data = await response.json();

        console.log(data);

        commingSoon(data)
        topSeller(data)
        newDeals(data)
        allGames(data)
        
    } catch(error) {
        messageCotainer.innerHTML = `<p> An error occurred when showing the Games</p>`
    }
};

getGames()