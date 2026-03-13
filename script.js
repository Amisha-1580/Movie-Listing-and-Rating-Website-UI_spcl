const movies = [

{
title: "Avengers Endgame",
genre: "Action / Sci-Fi",
year: 2019,
image: "images/movie1.jpg",
rating: "⭐⭐⭐⭐☆"
},

{
title: "Interstellar",
genre: "Sci-Fi",
year: 2014,
image: "images/movie2.jpg",
rating: "⭐⭐⭐⭐⭐"
},

{
title: "Joker",
genre: "Drama",
year: 2019,
image: "images/movie3.jpg",
rating: "⭐⭐⭐⭐☆"
}

];


const movieContainer = document.getElementById("movieContainer");


function displayMovies(movieList){

movieContainer.innerHTML = "";

movieList.forEach(function(movie){

const movieCard = document.createElement("div");

movieCard.classList.add("movie-card");

movieCard.innerHTML = `

<img src="${movie.image}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>Genre: ${movie.genre}</p>

<p>Year: ${movie.year}</p>

<div class="rating">${movie.rating}</div>

</div>

`;

movieContainer.appendChild(movieCard);

});

}


displayMovies(movies);



const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function(){

const searchValue = searchInput.value.toLowerCase();

const filteredMovies = movies.filter(function(movie){

return movie.title.toLowerCase().includes(searchValue);

});

displayMovies(filteredMovies);

});
