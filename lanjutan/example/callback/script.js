// fecth refactor version (vanila js)
const search_button = document.querySelector('.search-button')
search_button.addEventListener('click', async function () {
    try {
        const input = document.querySelector('.input-keyword')
        const movies = await getMovies(input.value)
        updateUI(movies)
    } catch (error) {
        alert(error)
    }
})

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=2f6f6aad&s=' + keyword)
            .then(response => {
                if (! response.ok) {
                    throw new Error(response.statusText)
                }

                return response.json()
            })
            .then(response => {
                if (response.Response === 'False') {
                    throw new Error(response.Error)
                }

                return response.Search
            })
}

function updateUI(movies) {
    let cards = ''
    movies.forEach(movie => cards += showCards(movie));
    const movie_container = document.querySelector('#movie-card')
    movie_container.innerHTML = cards
}

// event binding
document.addEventListener('click', async function (element) {
    if (element.target.classList.contains('movie-detail-button')) {
        const imdbid = element.target.dataset.imdbid
        const movie_detail = await getMovieDetail(imdbid)
        updateUIDetail(movie_detail)
    }
})

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=2f6f6aad&i=' + imdbid)
            .then(response => response.json())
            .then(movie => movie)
}

function updateUIDetail(movie) {
    const movie_modal = showModalDetail(movie)
    const modal_body = document.querySelector('.modal-body')
    modal_body.innerHTML = movie_modal
}

function showCards(movie) {
    return `<div class="my-3 col-md-4">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="mb-2 card-subtitle text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary movie-detail-button" data-imdbid="${movie.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showModalDetail(detail) {
    return`<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${detail.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${detail.Title} (${detail.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong> ${detail.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${detail.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${detail.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> ${detail.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
