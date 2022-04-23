import { createHTMLDetails } from "./createhtml.js";

const messageCotainer = document.querySelector(".error-message");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = fetch(`https://wildflowerpower.site/gamehub/wp-json/wc/store/products/` + id);

async function getGamesInfo() {
    try {
    const response = await url;

    const data = await response.json();

    createHTMLDetails(data);
}
catch(error) {
    messageCotainer.innerHTML = `<p> An error occurred when showing the Games</p>`
    console.log(error)
}
};

getGamesInfo();