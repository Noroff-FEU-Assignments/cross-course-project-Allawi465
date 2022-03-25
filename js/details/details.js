import { createHTMLDetails } from "../details/createhtml.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id, {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});

async function getGamesInfo() {
    try {
    const response = await url;

    const data = await response.json();

    createHTMLDetails(data);
}
catch(error) {
    console.log(error);
}
};

getGamesInfo();