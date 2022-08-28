window.addEventListener("load", function () {

    // TODO (B) Create a function called addCard(), which takes a single concert as an argument and adds a card to the
    // #container div to display that concert to the user. For reference, a card's HTML looks like:
    /*

        <div class="card">
            <div class="card-header"><a href="CONCERT_URL"><img class="card-image" src="./assets/CONCERT_IMAGE_NAME"></a></div>
            <div class="card-body">
                <h1 class="card-title">CONCERT_NAME</h1>
                <p class="card-text">CONCERT_DESCRIPTION</p>
            </div>
        </div>

    */

    // TODO (C) Loop through all concerts in the concerts array (see question3-concerts.js). For each one,
    // call the addCard() function, supplying that concert as a parameter.
    function addCard(concerts) {

        const container = document.querySelector("#container");
    
    
        const cardImage = document.querySelector(".cardImage");
        const descriptionText = document.querySelector("descriptionText");
    
        //descriptionText.innerHTML = concerts.description;
        //cardImage.title = concerts.name;
        //cardImage.alt = concerts.name;
        //cardImage.src = `./assets/${concerts.imageName}`;
        //console.log(concerts)
        
        container.innerHTML += `<div class="card">
        <div class="card-header"><a href=${concerts.url}><img class="card-image" src="./assets/${concerts.imageName}"></a></div>
        <div class="card-body">
            <h1 class="card-title">${concerts.name}</h1>
            <p class="card-text">${concerts.description}</p>
        </div>
        </div>
    `
    
    }

    concerts.forEach(addCard)
});



