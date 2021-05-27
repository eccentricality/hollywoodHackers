const getActorsElm = document.querySelector('button');
const movPosterImgElm = document.getElementById('movPosterImg');
const searchBarInputElm = document.getElementById('searchBarInput');

function getApi(movie) {
    let requestUrl = 'http://www.omdbapi.com/?apikey=2b59165d&t=' + movie;


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movActors = data.Actors.split(',');
            let movRated = data.Rated;
            let imdbRate = data.Ratings[0].Value;
            let tomatoRate = data.Ratings[1].Value;
            let metaRate = data.Ratings[2].Value;
            let releaseDate = data.Released;
            let boxOffice = data.BoxOffice;
            let movPoster = data.Poster;

            console.log(data)

            $('#movieContainer').append(`<img src = ${movPoster}/>`)

            // let movieContainerElm = $('#movieContainer').append('<img id = movPosterImg src=' + movPoster);

            for (let i = 0; i < movActors.length; ++i) {
                let ul = document.getElementById('listActors');
                let li = document.createElement('li');
                
                li[i] = movActors[i];

                console.log(li[0]);

                li.appendChild(document.createTextNode(li[i]));
                ul.appendChild(li);
            }
        });
}


getActorsElm.addEventListener('click', getApi());


// ------------------------------------

// function to search input city
function searchInput(){
    this.getApi(searchBarInputElm.value);
}

// click function to grab input from search bar
getActorsElm.addEventListener('click', function() {
    searchInput();
});