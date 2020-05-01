


const movieContainer = document.getElementsByClassName("movies-container")[0];
const movie = document.getElementsByClassName("movie")[0];


 

//takes parameter imdbID for onclick attribute later in doc.
function saveToWatchList(imdbID) {
        // movieData = response.data.Search;
    const movie = movieData.find(function(currentMovie){
                return currentMovie.imdbID == imdbID;
            }); 
            
            console.log("movieData");
            console.log(movieData);
            console.log("movie");
            console.log(movie);
let watchlistJSON = localStorage.getItem('watchlist');
let watchlist = JSON.parse(watchlistJSON);
if (watchlist == null) {
    watchlist = [];
    watchlist.push(movie);
    console.log(watchlist);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}
else {
    watchlist.push(movie);
    console.log(watchlist);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}

};



//execute after doc loaded
document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
        //take in array of movies
        //return string of HTML like that in step 1
        let movieHtmlArray = movieArray.map( function(currentMovie){
            return `<div class="card m-3" style="width:12rem">
                        <img class="card-img-top" id="poster" src="${currentMovie.Poster}"/>
                        <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                            <h3 class="ml--3" >${currentMovie.Title}</h3>
                            <h4 class="mr--3">${currentMovie.Year}</h4>
                        </div>
                            <div class="b"><button onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary btn-sm">Add Movie</button></div>
                            </div>
                    </div>`
        })
        return movieHtmlArray.join(``);
    }
    const myForm = document.getElementById('search-form');
    myForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let searchString = $('.search-bar').val();
        let urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString).then(function(response) {
            console.log(response.data);
            movie.innerHTML = renderMovies(response.data.Search);
            movieData = response.data.Search;
            console.log(movieData);
            return movieData;
            
        });
        
    });

});

