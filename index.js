document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  const titanicButton = document.querySelector('#Titanic')
  const terminatorButton = document.querySelector('#Terminator-2')
  
  titanicButton.addEventListener('click', fillInMovieData)
});

function fillInMovieData() {
  const currentMovie = movies['button']
  
  let title = currentMovie.title
  const titleDiv = document.querySelector('#title')
  titleDiv.innerText = title
  
  let director = currentMovie.director 
  const directorDiv = document.querySelector('#director')
  directorDiv.innerText = director
  
  let genre = currentMovie.genre 
  const genreDiv = document.querySelector('#genre')
  genreDiv.innerText = genre
  
  let filmRating = currentMovie.filmRating 
  const filmRatingDiv = document.querySelector('#filmRating')
  filmRatingDiv.innerText = filmRating
  
  let description = currentMovie.description
  const descriptionDiv = document.querySelector('#description')
  descriptionDiv.innerText = description
  
  let audienceScore = currentMovie.audienceScore
  const audienceScoreDiv = document.querySelector('#audienceScore')
  audienceScoreDiv.innerText = audienceScore
  
  let cast = currentMovie.cast
  const castDiv = document.querySelector('#cast')
  castDiv.innerText = cast
  
  let reviews = currentMovie.reviews
  const reviewsDiv = document.querySelector('#reviews')
  reviewsDiv.innerText = reviews
}