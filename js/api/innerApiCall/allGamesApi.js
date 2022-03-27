import { ViewAllGames } from "../createHtml/allGames.js"

const messageCotainer = document.querySelector(".error-message");

const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});

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