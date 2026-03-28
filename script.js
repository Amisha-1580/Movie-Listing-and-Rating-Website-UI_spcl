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

// Load saved data
if(localStorage.getItem("moviesData")){
movies = JSON.parse(localStorage.getItem("moviesData"));
}

const container = document.getElementById("movieContainer");

// Display movies
function displayMovies(list){
container.innerHTML="";

list.forEach((movie,index)=>{

const avg = getAverage(movie.ratings);

const card = document.createElement("div");
card.classList.add("movie-card");

card.innerHTML = `
<img src="${movie.image}">

<div class="movie-info">
<h3>${movie.title}</h3>
<p>${movie.genre}</p>
<p>${movie.year}</p>

<div class="rating" data-index="${index}">
${generateStars()}
</div>

<div class="average">⭐ ${avg}</div>

<button onclick="openModal(${index})">Details</button>
</div>
`;

container.appendChild(card);

});

addRatingEvents();
}

// Create stars
function generateStars(){
let stars="";
for(let i=0;i<5;i++){
stars += `<span class="star">★</span>`;
}
return stars;
}

// Rating logic
function addRatingEvents(){

document.querySelectorAll(".rating").forEach(ratingDiv=>{

const index = ratingDiv.getAttribute("data-index");
const stars = ratingDiv.querySelectorAll(".star");

stars.forEach((star,i)=>{

star.addEventListener("click",()=>{

movies[index].ratings.push(i+1);

localStorage.setItem("moviesData",JSON.stringify(movies));

displayMovies(movies);

});

});

});
}

// Average
function getAverage(arr){
if(arr.length===0) return "No ratings";
let sum = arr.reduce((a,b)=>a+b,0);
return (sum/arr.length).toFixed(1);
}

// Search
document.getElementById("search").addEventListener("keyup",(e)=>{
let val = e.target.value.toLowerCase();

let filtered = movies.filter(m =>
m.title.toLowerCase().includes(val)
);

displayMovies(filtered);
});

// Filter
document.getElementById("genreFilter").addEventListener("change",(e)=>{
let val = e.target.value;

if(val==="all"){
displayMovies(movies);
}else{
displayMovies(movies.filter(m=>m.genre===val));
}
});

// Modal
const modal = document.getElementById("modal");

function openModal(i){
modal.style.display="flex";

document.getElementById("modalTitle").innerText = movies[i].title;
document.getElementById("modalGenre").innerText = "Genre: "+movies[i].genre;
document.getElementById("modalYear").innerText = "Year: "+movies[i].year;

document.getElementById("trailerBtn").onclick = ()=>{
window.open(movies[i].trailer);
};
}

document.querySelector(".close").onclick = ()=>{
modal.style.display="none";
};

window.onclick = (e)=>{
if(e.target===modal){
modal.style.display="none";
}
};

displayMovies(movies);
