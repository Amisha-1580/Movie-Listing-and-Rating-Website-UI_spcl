let movies = [

{
title:"Avengers Endgame",
genre:"Action",
year:2019,
image:"images/movie1.jpg",
trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c",
ratings:[]
},

{
title:"Interstellar",
genre:"Sci-Fi",
year:2014,
image:"images/movie2.jpg",
trailer:"https://www.youtube.com/watch?v=zSWdZVtXT7E",
ratings:[]
},

{
title:"Joker",
genre:"Drama",
year:2019,
image:"images/movie3.jpg",
trailer:"https://www.youtube.com/watch?v=zAGVQLHvwOY",
ratings:[]
}

];


// Load ratings from localStorage
if(localStorage.getItem("movieRatings")){
movies = JSON.parse(localStorage.getItem("movieRatings"));
}


const movieContainer = document.getElementById("movieContainer");


function displayMovies(movieList){

movieContainer.innerHTML="";

movieList.forEach((movie,index)=>{

const avgRating = calculateAverage(movie.ratings);

const movieCard = document.createElement("div");

movieCard.classList.add("movie-card");

movieCard.innerHTML=`

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

<div class="average">Average: ${avgRating}</div>

<button onclick="openModal(${index})">Details</button>

</div>

`;

movieContainer.appendChild(movieCard);

});

addRatingEvents();

}


function calculateAverage(ratings){

if(ratings.length === 0) return "No ratings";

const sum = ratings.reduce((a,b)=>a+b,0);
return (sum/ratings.length).toFixed(1);

}


function addRatingEvents(){

const ratings = document.querySelectorAll(".rating");

ratings.forEach((ratingDiv)=>{

const index = ratingDiv.getAttribute("data-index");

const stars = ratingDiv.querySelectorAll(".star");

stars.forEach((star,starIndex)=>{

star.addEventListener("click",()=>{

movies[index].ratings.push(starIndex+1);

// Save to localStorage
localStorage.setItem("movieRatings", JSON.stringify(movies));

displayMovies(movies);

});

});

});

}


displayMovies(movies);


// Search
document.getElementById("search").addEventListener("keyup",(e)=>{

const value = e.target.value.toLowerCase();

const filtered = movies.filter(movie =>
movie.title.toLowerCase().includes(value)
);

displayMovies(filtered);

});


// Filter
document.getElementById("genreFilter").addEventListener("change",(e)=>{

const genre = e.target.value;

if(genre==="all"){
displayMovies(movies);
}else{
const filtered = movies.filter(movie => movie.genre === genre);
displayMovies(filtered);
}

});


// Modal
const modal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalGenre = document.getElementById("modalGenre");
const modalYear = document.getElementById("modalYear");
const trailerBtn = document.getElementById("trailerBtn");
const close = document.querySelector(".close");


function openModal(index){

modal.style.display="flex";

modalTitle.innerText = movies[index].title;
modalGenre.innerText = "Genre: "+movies[index].genre;
modalYear.innerText = "Year: "+movies[index].year;

trailerBtn.onclick = ()=>{
window.open(movies[index].trailer);
};

}


close.onclick = ()=>{
modal.style.display="none";
};

window.onclick = (e)=>{
if(e.target === modal){
modal.style.display="none";
}
};
