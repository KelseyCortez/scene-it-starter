const url = `http://www.omdbapi.com/?i=tt3896198&apikey=199ebac6`;
$.get(url);

document.addEventListener("DOMContentLoaded", function () {
    const moviesContainer = document.querySelector('.movies-container');
    const savedMovies = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(savedMovies);
    function renderMovies(url) {
        console.log(url);
        const moviesHtmlArray = url.map(movie => {
            return `<div class="movie">
            <div class="card" style="width: 18rem;">
              <img src="${movie.Poster}" class="movie-poster" alt="...">
              <div class="card-body">
                <h5 class="movie-title">${movie.Title}</h5>
                <p class="release-date">${movie.Year}</p>
              </div>
            </div>
          </div>`

        })
        return moviesHtmlArray.join('');
    };
    moviesContainer.innerHTML = renderMovies(watchlist);



})