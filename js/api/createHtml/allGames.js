export function allGames(data) {
    const allGames = document.querySelector(".games-item4");

    allGames.innerHTML = "";

    for (let i = 12 ; i < data.length; i++) {

        if (i === 15 ) {
            break;
        }
        allGames.innerHTML += `<div class="games-products">
                                <div class="item-images" style="background-image: url('${data[i].thumbnail}')"></div>
                                <h3>${data[i].title}</h3>
                                <p>Let the gaming begin.</p>
                                <div class="view-links">
                                 <a href="details.html" class="view-all">View Game</a>
                                 </div>`; 
    }
};

export function ViewAllGames(data) {
    const games = document.querySelector(".ViewAll-item");

    games.innerHTML = "";

    for (let i = 12 ; i < data.length; i++) {

        if (i === 15 ) {
            break;
        }

        games.innerHTML += `<div class="games-products">
                                            <div class="item-images"               style="background-image: url('${data[i].thumbnail}')"></div>
                                            <h3>${data[i].title}</h3>
                                            <p>159,- Nok}</P>
                                            <span class="about-link">
                                            <a href="href="details.html?id=${data[i].id}" class="pre-links">About</a>
                                            <span class="cart-link">
                                             <a href=" " class="pre-links">Add to cart</a>
                                            </span>
                                        </div>`; 
        }
};