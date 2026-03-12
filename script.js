const searchInput = document.getElementById("search");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    movieCards.forEach(function (card) {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});