document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  const titanicButton = document.querySelector('#Titanic')
  const terminatorButton = document.querySelector('#Terminator-2')
  
  titanicButton.addEventListener('click', fillInMovieData)
});

function fillInMovieData() {
  let title = movies['Titanic'].title
  const titleDiv = document.querySelector('#title')
  titleDiv.innerText = title
  
  let director = movies['Titanic'].director 
  const directorDiv = document.querySelector('#director')
  directorDiv.innerText = director
  
  let genre = movies['Titanic'].genre 
  const genreDiv = document.querySelector('#genre')
  genreDiv.innerText = genre
  
  let filmRating = movies['Titanic'].filmRating 
  const filmRatingDiv = document.querySelector('#filmRating')
  filmRatingDiv.innerText = filmRating
  
}