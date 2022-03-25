export function allGames(data) {
    const allGames = document.querySelector(".games-item4");

    allGames.innerHTML = "";

    for (let i = 12 ; i < data.length; i++) {

        if (i === 15 ) {
            break;
        }
        allGames.innerHTML += `<div class="games-products">
                                    <img class="item-images" src="${data[i].thumbnail}"/>
                                    <h3>${data[i].title}</h3>
                                    <p>Let the gaming begin.</p>
                                    <span class="view-links">
                                        <a href="details.html?id=${data[i].id}" class="view-all">View Game</a>
                                    </span>
                                    </div>`; 
    }
};

export function ViewAllGames(data) {
    const games = document.querySelector(".games-item");

    games.innerHTML = "";

    for (let i = 0 ; i < data.length; i++) {

        if (i === 12 ) {
            break;
        }

        games.innerHTML += `<div class="games-products">
                                <img class="item-images" src="${data[i].thumbnail}"/>
                                <h3>${data[i].title}</h3>
                                <p>159,- nok</P>
                                <span class="about-link">
                                    <a href="details.html?id=${data[i].id}" class="pre-links">About</a>
                                </span>
                                <span class="cart-link">
                                    <a href=" "class="pre-links">Add to cart</a>
                                </span>
                            </div>`; 
    }
};