const getActorsElm = document.querySelector('button');
const movPosterImgElm1 = document.getElementById('loadingScreenImg1');
const searchBarInputElm = document.getElementById('searchBar');
const loadingScreenDesc1Elm = document.getElementById('loadingScreenDesc1');

let movieContainer = [
    {
        movieSlot: '1',
        moviePoster: document.getElementById('loadingScreenImg1'),
        firstActor: document.getElementById('firstActor1'),
        secondActor: document.getElementById('secondActor1'),
        thirdActor: document.getElementById('thirdActor1'),
        fourthActor: document.getElementById('fourthActor1'),
    }
]

// search through omdb api to grab data to be utilized
function getApi(movie) {
    let requestUrl = 'http://www.omdbapi.com/?apikey=2b59165d&t=' + movie;


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movActors = data.Actors.split(',');

            console.log(data);
            console.log(movActors);

            movieContainer[0].moviePoster.src = data.Poster;
            movieContainer[0].firstActor.innerText = movActors[0];
            movieContainer[0].secondActor.innerText = movActors[1];
            movieContainer[0].thirdActor.innerText = movActors[2];
            movieContainer[0].fourthActor.innerText = movActors[3];
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