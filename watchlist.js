
const movieContainer = document.getElementsByClassName("movies-container")[0];
const movie = document.getElementsByClassName("movie")[0];



document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
        //take in array of movies
        //return string of HTML like that in step 1
        let movieHtmlArray = movieArray.map(function(currentMovie){
            return `<div class="card m-3" style="width:12rem">
            <img class="card-img-top" id="poster" src="${currentMovie.Poster}"/>
                        <div class="card-body">
                        <div class="card-title d-flex justify-content-between">
                        <h3 class="ml--3" >${currentMovie.Title}</h3>
                        <h4 class="mr--3">${currentMovie.Year}</h4>
                        </div>
                        <div class="b"><button onclick="removeFromWatchList('${currentMovie.imdbID}')" class="btn btn-primary btn-sm">Remove Movie</button></div>
                        </div>
                        </div>`
                    })
                    return movieHtmlArray.join(``);
                }
                movie.innerHTML = renderMovies(JSON.parse(localStorage.getItem('watchlist')));
            });

        

//takes parameter imdbID for onclick attribute later in doc.
// function saveToWatchList(imdbID) {
//     movieData = response.data.search;
//     console.log("movieData");
//     console.log(movieData);
//     const movie = movieData.find(function(currentMovie){
//                 return currentMovie.imdbID == imdbID;
//     });
//     console.log("movie"); 
//     console.log(movie);
//     let watchlistJSON = localStorage.getItem('watchlist');
//     let watchlist = JSON.parse(watchlistJSON);
//     if (watchlist == null) {
//         watchlist = [];
//         watchlist.push(movie);
//         console.log(watchlist);
//         watchlistJSON = JSON.stringify(watchlist);
//         localStorage.setItem('watchlist', watchlistJSON);
//     }
//     else {
//         watchlist.push(movie);
//         console.log(watchlist);
//         watchlistJSON = JSON.stringify(watchlist);
//         localStorage.setItem('watchlist', watchlistJSON);
//     }

// }  



function removeFromWatchList(imdbID) {
    movieData = response.data.search;
    const movie = movieData.find(function(currentMovie){
                return currentMovie.imdbID == imdbID;
    }); 
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    watchlist.removeItem(movie);    //need to remove selected item
    console.log(watchlist);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);

}







