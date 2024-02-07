class MoviesApi {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _checkRes(res) {return res.ok ? res.json() : Promise.reject}

    getMovies(url, options) {
        return fetch(`${this._url}`, options)
            .then(this._checkRes)
    }

}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi