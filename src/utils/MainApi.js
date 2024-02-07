class MainApi {
    constructor(options) {
        this._checkRes = (res => res.ok ? res.json() : Promise.reject());
        this._url = options.baseUrl;
    }

    register(username, email, password) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                email: email,
                password: password
            })
        })
            .then(this._checkRes)
    }

    login(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(this._checkRes)
    }

    getMovies(token) {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._checkRes)
    }

    addMovie(data, token) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                description: data.description,
                year: data.year,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN
            })
        })
            .then(this._checkRes)
    }

    deleteMovie(movieId, token) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._checkRes)
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._checkRes)
    }

    sendUserInfo(username, email, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                email: email
            })
        })
            .then(this._checkRes)
    }

}

const mainApi = new MainApi({
    baseUrl: 'https://api.iceteamovies.nomoredomainsrocks.ru'
});

export default mainApi;