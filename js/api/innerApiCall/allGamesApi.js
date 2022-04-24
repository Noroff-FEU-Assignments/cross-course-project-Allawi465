import { ViewAllGames } from "../createHtml/allGames.js"

const messageCotainer = document.querySelector(".error-message");
const games = document.querySelector(".games-item");
const categories = document.querySelectorAll(".categories")
const searchButton = document.querySelector(".searchButton")
const sorter = document.querySelector(".select");

const wpUrl = "https://wildflowerpower.site/gamehub/wp-json/wc/store/products";

async function getGames(url) {
    try {
        const response = await fetch(url);
        
        const data = await response.json();
        
        ViewAllGames(data) 
    } 
    catch(error) {
        messageCotainer.innerHTML = `<p> An error occurred when showing the Games</p>`
    }
};

getGames(wpUrl)

categories.forEach(function(category){
    category.onclick = function(event){
       let newurl;
        if (event.target.id === "featured") {
            newurl = wpUrl + "?featured=true"
        } 
        else {
            const categoryOption = event.target.value;
            newurl = wpUrl + `?category=${categoryOption}`
        }
        games.innerHTML = "";
        getGames(newurl)
    }
});

searchButton.onclick = function() {
    const searchInput = document.querySelector("#search").value;
    const newurl = wpUrl + `?search=${searchInput}`;
    games.innerHTML = "";
    getGames(newurl);
};

const sortUrl = wpUrl + `?orderby=price`

sorter.onchange = function (event) {
    if (event.target.value === "high to low" ) {
        games.innerHTML = "";
        getGames(sortUrl)
    } else if (event.target.value === "low to high") {
        games.innerHTML = "";
        getGames(wpUrl);
    }
};
