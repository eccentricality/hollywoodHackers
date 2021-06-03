const getActorsElm = document.querySelector('button');
const movPosterImgElm1 = document.getElementById('loadingScreenImg1');
const searchBarInputElm = document.getElementById('searchBar');
const loadingScreenDesc1Elm = document.getElementById('loadingScreenDesc1');
const revSummary1Elm = document.getElementById('revSummary1');

let movieContainer = [
    {
        movieSlot: '1',
        moviePoster: document.getElementById('loadingScreenImg1'),
        movieRated: document.getElementById('movieRated1'),
        firstActor: document.getElementById('firstActor1'),
        secondActor: document.getElementById('secondActor1'),
        thirdActor: document.getElementById('thirdActor1'),
        fourthActor: document.getElementById('fourthActor1'),
        imdbRating: document.getElementById('imdbRating1'),
        tomatoRating: document.getElementById('tomatoRating1'),
        metaRating: document.getElementById('metaRating1'),
        boxOffice: document.getElementById('boxOffice1'),
    }
]

// search through omdb api to grab data to be utilized
function getApi(movie) {
    let requestUrl = 'https://www.omdbapi.com/?apikey=2b59165d&t=' + movie;
    let searchedMovie = movie;

    getMovReview(searchedMovie);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movActors = data.Actors.split(',');

            console.log(data);
            console.log(movActors);

            movieContainer[0].moviePoster.src = data.Poster;
            movieContainer[0].movieRated.innerText = 'Rated ' + data.Rated;
            movieContainer[0].firstActor.innerText = movActors[0];
            movieContainer[0].secondActor.innerText = movActors[1];
            movieContainer[0].thirdActor.innerText = movActors[2];
            movieContainer[0].fourthActor.innerText = movActors[3];
            movieContainer[0].imdbRating.innerText = 'IMDB: ' + data.Ratings[0].Value;
            movieContainer[0].tomatoRating.innerText = 'Rotten Tomato: ' + data.Ratings[1].Value;
            movieContainer[0].metaRating.innerText = 'Meta Critic: ' + data.Ratings[2].Value;
            movieContainer[0].boxOffice.innerText = 'Box Office: ' + data.BoxOffice;
        });
}

// ------------------------------------

// search for input movie title function
function searchInput(){
    this.getApi(searchBarInputElm.value);
}

// function to pass search bar input into search input function on pressing enter
searchBarInputElm.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchInput();
    }
});

function getMovReview(movie) {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movie + '&api-key=fx2dHCz2zs4KD2BRnWCY4iAkqczVc9v9')
    .then((response) => response.json())
    .then((data) => appendMovReview(data.results[0].summary_short))
}

function appendMovReview(data) {
    revSummary1.innerText = data;
}