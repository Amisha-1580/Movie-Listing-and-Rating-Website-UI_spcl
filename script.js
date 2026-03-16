const movies = [

{
title:"Avengers Endgame",
genre:"Action",
year:2019,
image:"images/movie1.jpg",
trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c"
},

{
title:"Interstellar",
genre:"Sci-Fi",
year:2014,
image:"images/movie2.jpg",
trailer:"https://www.youtube.com/watch?v=zSWdZVtXT7E"
},

{
title:"Joker",
genre:"Drama",
year:2019,
image:"images/movie3.jpg",
trailer:"https://www.youtube.com/watch?v=zAGVQLHvwOY"
}

];


const movieContainer=document.getElementById("movieContainer");


function displayMovies(movieList){

movieContainer.innerHTML="";

movieList.forEach((movie,index)=>{

const movieCard=document.createElement("div");

movieCard.classList.add("movie-card");

movieCard.innerHTML=`

<img src="${movie.image}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>Genre: ${movie.genre}</p>

<p>Year: ${movie.year}</p>

<div class="rating">

<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>

</div>

<button onclick="openModal(${index})">Details</button>

</div>

`;

movieContainer.appendChild(movieCard);

});

addRating();

}


function addRating(){

const stars=document.querySelectorAll(".rating");

stars.forEach(rating=>{

const star=rating.querySelectorAll(".star");

star.forEach((s,i)=>{

s.addEventListener("click",()=>{

star.forEach((el,index)=>{

if(index<=i){

el.classList.add("active");

}else{

el.classList.remove("active");

}

});

});

});

});

}


displayMovies(movies);


const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=movies.filter(movie=>movie.title.toLowerCase().includes(value));

displayMovies(filtered);

});


const genreFilter=document.getElementById("genreFilter");

genreFilter.addEventListener("change",()=>{

const genre=genreFilter.value;

if(genre==="all"){

displayMovies(movies);

}else{

const filtered=movies.filter(movie=>movie.genre===genre);

displayMovies(filtered);

}

});


const modal=document.getElementById("movieModal");

const modalTitle=document.getElementById("modalTitle");

const modalGenre=document.getElementById("modalGenre");

const modalYear=document.getElementById("modalYear");

const trailerBtn=document.getElementById("trailerBtn");

const close=document.querySelector(".close");


function openModal(index){

modal.style.display="flex";

modalTitle.innerText=movies[index].title;

modalGenre.innerText="Genre: "+movies[index].genre;

modalYear.innerText="Year: "+movies[index].year;

trailerBtn.onclick=()=>{

window.open(movies[index].trailer);

};

}


close.onclick=()=>{

modal.style.display="none";

};


window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};
