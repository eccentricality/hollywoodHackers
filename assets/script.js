const getActorsBtn = document.getElementsByClassName('getActors');
var tableBody = document.getElementById('repo-table');

function getApi() {
    let requestUrl = 'http://www.omdbapi.com/?apikey=2b59165d&t=Zombieland';


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let actorsArray = data.Actors.split(',');
            console.log(actorsArray);
        });
}

getApi();