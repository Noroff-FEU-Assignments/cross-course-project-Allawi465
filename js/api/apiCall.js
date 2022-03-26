import { allGames } from "./createHtml/allGames.js"
import { newDeals } from "./createHtml/newDeals.js";
import { topSeller } from "./createHtml/topSeller.js";
import { commingSoon } from "./createHtml/preOder.js";

const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});

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
        /* resultCotainer.innerHTML = `<p> An error occurred when calling the API</p>` */
    }
};

getGames()