const movies = [

{
title: "Avengers Endgame",
genre: "Action / Sci-Fi",
year: 2019,
image: "images/movie1.jpg",
rating: 0
},

{
title: "Interstellar",
genre: "Sci-Fi",
year: 2014,
image: "images/movie2.jpg",
rating: 0
},

{
title: "Joker",
genre: "Drama",
year: 2019,
image: "images/movie3.jpg",
rating: 0
}

];


const movieContainer = document.getElementById("movieContainer");


function displayMovies(movieList){

movieContainer.innerHTML = "";

movieList.forEach((movie,index)=>{

const movieCard = document.createElement("div");

movieCard.classList.add("movie-card");

movieCard.innerHTML = `

<img src="${movie.image}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>Genre: ${movie.genre}</p>

<p>Year: ${movie.year}</p>

<div class="rating" data-index="${index}">

<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>

</div>

</div>

`;

movieContainer.appendChild(movieCard);

});

addRatingEvents();

}


function addRatingEvents(){

const ratings = document.querySelectorAll(".rating");

ratings.forEach((ratingDiv)=>{

const stars = ratingDiv.querySelectorAll(".star");

stars.forEach((star,starIndex)=>{

star.addEventListener("click",()=>{

stars.forEach((s,i)=>{

if(i<=starIndex){

s.classList.add("active");

}else{

s.classList.remove("active");

}

});

});

});

});

}


displayMovies(movies);



const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup",function(){

const searchValue = searchInput.value.toLowerCase();

const filteredMovies = movies.filter(movie =>

movie.title.toLowerCase().includes(searchValue)

);

displayMovies(filteredMovies);

});
