import { ViewAllGames } from "../createHtml/allGames.js"

const messageCotainer = document.querySelector(".error-message");

const url = fetch("http://localhost/gamehub/wp-json/wc/store/products");

async function getGames() {

    try {
        const response = await url;
        
        const data = await response.json();

        ViewAllGames(data)
        
    } catch(error) {
        messageCotainer.innerHTML = `<p> An error occurred when showing the Games</p>`
    }
};

getGames()