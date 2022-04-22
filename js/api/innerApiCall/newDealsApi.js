import { allDeals } from "../createHtml/newDeals.js";

const messageCotainer = document.querySelector(".error-message");

const url = fetch("https://wildflowerpower.site/gamehub/wp-json/wc/v3/products?consumer_key=ck_810589bc9a817ddde7853b9c96dfd53a45a6c994&consumer_secret=cs_519f71cee5ce259b99046607c1a640e516271066");

async function getGames() {

    try {
        const response = await url;
        
        const data = await response.json();

        const item = data;

        data.push({
            ...data, 
            changeNumberUnits: 1,
        });

        allDeals(data)
        
    } catch(error) {
        messageCotainer.innerHTML = `<p> An error occurred when showing the Games</p>`
    }
};

getGames()