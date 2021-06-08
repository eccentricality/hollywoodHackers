const getActorsElm = document.querySelector('button');
const movPosterImgElm1 = document.getElementById('loadingScreenImg1');
const searchBarInputElm = document.getElementById('searchBar');
const loadingScreenDesc1Elm = document.getElementById('loadingScreenDesc1');
const searchHistoryElm = document.getElementById('searchHistory');
const loadCard1Elm = document.getElementById('loadCard1');
const loadCard2Elm = document.getElementById('loadCard2');
const loadCard3Elm = document.getElementById('loadCard3');
const loadCard4Elm = document.getElementById('loadCard4');
const singleSearchContainerElm = document.getElementById('singleSearchContainer');

// container to hold all elements to be appended
let movieContainer = [
    {
        movieSlot: '1',
        moviePoster: document.getElementById('loadingScreenImg1'),
        movieRated: document.getElementById('movieRated1'),
        firstActor: document.getElementById('firstActor1'),
        secondActor: document.getElementById('secondActor1'),
        thirdActor: document.getElementById('thirdActor1'),
        fourthActor: document.getElementById('fourthActor1'),
        revSummary: document.getElementById('revSummary1'),
        imdbRating: document.getElementById('imdbRating1'),
        tomatoRating: document.getElementById('tomatoRating1'),
        metaRating: document.getElementById('metaRating1'),
        boxOffice: document.getElementById('boxOffice1'),
    },
    {
        movieSlot: '2',
        moviePoster: document.getElementById('loadingScreenImg2'),
        movieRated: document.getElementById('movieRated2'),
        firstActor: document.getElementById('firstActor2'),
        secondActor: document.getElementById('secondActor2'),
        thirdActor: document.getElementById('thirdActor2'),
        fourthActor: document.getElementById('fourthActor2'),
        revSummary: document.getElementById('revSummary2'),
        imdbRating: document.getElementById('imdbRating2'),
        tomatoRating: document.getElementById('tomatoRating2'),
        metaRating: document.getElementById('metaRating2'),
        boxOffice: document.getElementById('boxOffice2'),
    },
    {
        movieSlot: '3',
        moviePoster: document.getElementById('loadingScreenImg3'),
        movieRated: document.getElementById('movieRated3'),
        firstActor: document.getElementById('firstActor3'),
        secondActor: document.getElementById('secondActor3'),
        thirdActor: document.getElementById('thirdActor3'),
        fourthActor: document.getElementById('fourthActor3'),
        revSummary: document.getElementById('revSummary3'),
        imdbRating: document.getElementById('imdbRating3'),
        tomatoRating: document.getElementById('tomatoRating3'),
        metaRating: document.getElementById('metaRating3'),
        boxOffice: document.getElementById('boxOffice3'),
    },
    {
        movieSlot: '4',
        moviePoster: document.getElementById('loadingScreenImg4'),
        movieRated: document.getElementById('movieRated4'),
        firstActor: document.getElementById('firstActor4'),
        secondActor: document.getElementById('secondActor4'),
        thirdActor: document.getElementById('thirdActor4'),
        fourthActor: document.getElementById('fourthActor4'),
        revSummary: document.getElementById('revSummary4'),
        imdbRating: document.getElementById('imdbRating4'),
        tomatoRating: document.getElementById('tomatoRating4'),
        metaRating: document.getElementById('metaRating4'),
        boxOffice: document.getElementById('boxOffice4'),
    },
    {
        movieSlot: '5',
        moviePoster: document.getElementById('loadingScreenImg5'),
        movieRated: document.getElementById('movieRated5'),
        firstActor: document.getElementById('firstActor5'),
        secondActor: document.getElementById('secondActor5'),
        thirdActor: document.getElementById('thirdActor5'),
        fourthActor: document.getElementById('fourthActor5'),
        revSummary: document.getElementById('revSummary5'),
        imdbRating: document.getElementById('imdbRating5'),
        tomatoRating: document.getElementById('tomatoRating5'),
        metaRating: document.getElementById('metaRating5'),
        boxOffice: document.getElementById('boxOffice5'),
    }
]

// search through omdb api to grab data to be utilized and appended to single search card div
function getApi(movie) {
    let requestUrl = 'https://www.omdbapi.com/?apikey=2b59165d&t=' + movie;
    let searchedMovie = movie;

    getMovReview5(searchedMovie);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movActors = data.Actors.split(',');

                movieContainer[4].moviePoster.src = data.Poster;
                movieContainer[4].movieRated.innerText = 'Rated ' + data.Rated;
                movieContainer[4].firstActor.innerText = movActors[0];
                movieContainer[4].secondActor.innerText = movActors[1];
                movieContainer[4].thirdActor.innerText = movActors[2];
                movieContainer[4].fourthActor.innerText = movActors[3];
                movieContainer[4].imdbRating.innerText = 'IMDB: ' + data.Ratings[0].Value;
                movieContainer[4].tomatoRating.innerText = 'Rotten Tomato: ' + data.Ratings[1].Value;
                movieContainer[4].metaRating.innerText = 'Meta Critic: ' + data.Ratings[2].Value;
                movieContainer[4].boxOffice.innerText = 'Box Office: ' + data.BoxOffice;

        });
}

// generates random movie from container of movies in separate js file to append on home page
function genRandMov() {
    let randGenMov = randMovContainer[Math.floor(Math.random() * randMovContainer.length)];

    return randGenMov; 
}

// search for input movie title function
function searchInput(){
    this.getApi(searchBarInputElm.value);
}

// function to pass search bar input into search input function on pressing enter
searchBarInputElm.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        
        searchInput();
        recallHistory();
        shortenHistory();
        searchBarInputElm.value = '';

        loadCard1Elm.classList.add('hidden');
        loadCard2Elm.classList.add('hidden');
        loadCard3Elm.classList.add('hidden');
        loadCard4Elm.classList.add('hidden');

        singleSearchContainerElm.classList.remove('singleSearchContainer');
    }
});

// function to fetch and append movie review from ny times api
function getMovReview1(movie) {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movie + '&api-key=fx2dHCz2zs4KD2BRnWCY4iAkqczVc9v9')
    .then((response) => response.json())
    .then((data) => appendMovReview1(data.results[0].summary_short))
}

// append portion of the get movie review
function appendMovReview1(data) {
    movieContainer[0].revSummary.innerText = data;
}

function getMovReview2(movie) {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movie + '&api-key=fx2dHCz2zs4KD2BRnWCY4iAkqczVc9v9')
    .then((response) => response.json())
    .then((data) => appendMovReview2(data.results[0].summary_short))
}

function appendMovReview2(data) {
    movieContainer[1].revSummary.innerText = data;
}

function getMovReview3(movie) {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movie + '&api-key=fx2dHCz2zs4KD2BRnWCY4iAkqczVc9v9')
    .then((response) => response.json())
    .then((data) => appendMovReview3(data.results[0].summary_short))
}

function appendMovReview3(data) {
    movieContainer[2].revSummary.innerText = data;
}

function getMovReview4(movie) {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movie + '&api-key=fx2dHCz2zs4KD2BRnWCY4iAkqczVc9v9')
    .then((response) => response.json())
    .then((data) => appendMovReview4(data.results[0].summary_short))
}

function appendMovReview4(data) {
    movieContainer[3].revSummary.innerText = data;
}

function getMovReview5(movie) {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movie + '&api-key=fx2dHCz2zs4KD2BRnWCY4iAkqczVc9v9')
    .then((response) => response.json())
    .then((data) => appendMovReview5(data.results[0].summary_short))
}

function appendMovReview5(data) {
    movieContainer[4].revSummary.innerText = data;
}

// generates and appends movie contents to 4 separate movie containers on home page
function getHomeApi1(movie) {
    let requestUrl = 'https://www.omdbapi.com/?apikey=2b59165d&t=' + movie;
    let searchedMovie = movie;

    getMovReview1(searchedMovie);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movActors = data.Actors.split(',');

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

function getHomeApi2(movie) {
    let requestUrl = 'https://www.omdbapi.com/?apikey=2b59165d&t=' + movie;
    let searchedMovie = movie;

    getMovReview2(searchedMovie);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movActors = data.Actors.split(',');

                movieContainer[1].moviePoster.src = data.Poster;
                movieContainer[1].movieRated.innerText = 'Rated ' + data.Rated;
                movieContainer[1].firstActor.innerText = movActors[0];
                movieContainer[1].secondActor.innerText = movActors[1];
                movieContainer[1].thirdActor.innerText = movActors[2];
                movieContainer[1].fourthActor.innerText = movActors[3];
                movieContainer[1].imdbRating.innerText = 'IMDB: ' + data.Ratings[0].Value;
                movieContainer[1].tomatoRating.innerText = 'Rotten Tomato: ' + data.Ratings[1].Value;
                movieContainer[1].metaRating.innerText = 'Meta Critic: ' + data.Ratings[2].Value;
                movieContainer[1].boxOffice.innerText = 'Box Office: ' + data.BoxOffice;
        });
}

function getHomeApi3(movie) {
    let requestUrl = 'https://www.omdbapi.com/?apikey=2b59165d&t=' + movie;
    let searchedMovie = movie;

    getMovReview3(searchedMovie);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movActors = data.Actors.split(',');

                movieContainer[2].moviePoster.src = data.Poster;
                movieContainer[2].movieRated.innerText = 'Rated ' + data.Rated;
                movieContainer[2].firstActor.innerText = movActors[0];
                movieContainer[2].secondActor.innerText = movActors[1];
                movieContainer[2].thirdActor.innerText = movActors[2];
                movieContainer[2].fourthActor.innerText = movActors[3];
                movieContainer[2].imdbRating.innerText = 'IMDB: ' + data.Ratings[0].Value;
                movieContainer[2].tomatoRating.innerText = 'Rotten Tomato: ' + data.Ratings[1].Value;
                movieContainer[2].metaRating.innerText = 'Meta Critic: ' + data.Ratings[2].Value;
                movieContainer[2].boxOffice.innerText = 'Box Office: ' + data.BoxOffice;
        });
}

function getHomeApi4(movie) {
    let requestUrl = 'https://www.omdbapi.com/?apikey=2b59165d&t=' + movie;
    let searchedMovie = movie;

    getMovReview4(searchedMovie);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movActors = data.Actors.split(',');

                movieContainer[3].moviePoster.src = data.Poster;
                movieContainer[3].movieRated.innerText = 'Rated ' + data.Rated;
                movieContainer[3].firstActor.innerText = movActors[0];
                movieContainer[3].secondActor.innerText = movActors[1];
                movieContainer[3].thirdActor.innerText = movActors[2];
                movieContainer[3].fourthActor.innerText = movActors[3];
                movieContainer[3].imdbRating.innerText = 'IMDB: ' + data.Ratings[0].Value;
                movieContainer[3].tomatoRating.innerText = 'Rotten Tomato: ' + data.Ratings[1].Value;
                movieContainer[3].metaRating.innerText = 'Meta Critic: ' + data.Ratings[2].Value;
                movieContainer[3].boxOffice.innerText = 'Box Office: ' + data.BoxOffice;
        });
}

// function to trigger all functions on page load
function loadHomePage() {
    let homeMovGen1 = genRandMov();
    let homeMovGen2 = genRandMov();
    let homeMovGen3 = genRandMov();
    let homeMovGen4 = genRandMov();

    getHomeApi1(homeMovGen1);
    getHomeApi2(homeMovGen2);
    getHomeApi3(homeMovGen3);
    getHomeApi4(homeMovGen4);
}

// run the function to load home page
loadHomePage();

// functions to handle local storage and search history
$(document).ready(function() {
    // hidden at start
    $('#searchHistory').hide();

    // reveal on focus for mobile ports
    $('#searchBar').on('focus', function() {
        $('searchHistory').show();
    });

    // show and hide functions
    $('#searchBar').hover(function() {
        $('#searchHistory').show();
    });

    $('#searchHistory').hover(function() {
        $('#searchHistory').show();
    });

    $('#searchBar').mouseleave(function() {
        $('#searchHistory').hide();
    });

    $('#searchHistory').mouseleave(function() {
        $('#searchHistory').hide();
    });

    $('#searchHistory').on('click', 'li', function(e) {
        e.preventDefault();
        let textInfo = $(this).text();
        $('#searchBar').val(textInfo);
        searchInput();
        recallHistory();
        shortenHistory();
        searchBarInputElm.value = '';
        $('#searchHistory').toggle();
    });
});

// function to recall history and store history
function recallHistory() {
    let localSearchHistory = JSON.parse(localStorage.getItem('localStoredHistory')) || [];
    let searchedMovie = searchBarInputElm.value;

    localSearchHistory.push(searchedMovie);

    searchHistoryElm.innerText = '';

    for (let i = localSearchHistory.length - 1; i >=0; i--) {
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(localSearchHistory[i]));
        searchHistoryElm.appendChild(li);
    }

    localStorage.setItem('localStoredHistory', JSON.stringify(localSearchHistory));
};

// function to shorten history list
function shortenHistory() {
    let localSearchHistory = JSON.parse(localStorage.getItem('localStoredHistory')) || [];

    if (localSearchHistory.length > 5) {
        localSearchHistory.shift();
    }
    localStorage.setItem('localStoredHistory', JSON.stringify(localSearchHistory));
};