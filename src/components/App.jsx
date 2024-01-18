import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import mainApi from "../utils/MainApi";
import {useEffect, useState} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Preloader from "./Preloader/Preloader";

function App() {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRequesting, setIsRequesting] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [savedMovies, setSavedMovies] = useState([]);

    const [isFirstSearch, setIsFirstSearch] = useState(false);

    const [checkIsLogged, setCheckIsLogged] = useState(true);
    useEffect(()=> {
        if(!localStorage.searchValue || !localStorage.shortsChecked){
            setIsFirstSearch(true);
        }
    },[])

    useEffect(() => {
        if (localStorage.jwt) {
            Promise.all([mainApi.getUserInfo(localStorage.jwt), mainApi.getMovies(localStorage.jwt)])
                .then(([userRes, moviesRes]) => {
                    setSavedMovies(moviesRes);
                    setCurrentUser(userRes);
                    setIsLoggedIn(true);
                    setCheckIsLogged(false);
                })
                .catch((err) => {
                    console.error(`Ошибка при загрузке начальных данных ${err}`)
                    localStorage.clear()
                    setCheckIsLogged(false)
                })
        } else {
            setIsLoggedIn(false);
            localStorage.clear();
            setCheckIsLogged(false);
        }
    }, [isLoggedIn])

    function login(email, password) {
        setIsRequesting(true);
        mainApi.login(email, password)
            .then(res => {
                localStorage.setItem('jwt', res.token);
                setIsLoggedIn(true);
                navigate('/movies');
            })
            .catch((err) => {
                console.error(`Ошибка авторизации ${err}`);
            })
            .finally(() => setIsRequesting(false))
    }

    function logOut() {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
        setIsFirstSearch(true);
    }

    function registration(username, email, password) {
        setIsRequesting(true);
        mainApi.register(username, email, password)
            .then(res => {
                login(email, password);
            })
            .catch(err => {
                console.error(`Ошибка регистрации ${err}`)
            })
            .finally(() => setIsRequesting(false))
    }

    function sendUserData(username, email) {
        setIsRequesting(true);
        mainApi.sendUserInfo(username, email, localStorage.jwt)
            .then(res => setCurrentUser(res))
            .catch(err => console.error(`Ошибка обновления данных профиля ${err}`))
            .finally(() => setIsRequesting(false))
    }

    function deleteMovie(movieId) {
        mainApi.deleteMovie(movieId, localStorage.jwt)
            .then(() => {
                setSavedMovies((state) => state.filter(movie => movie._id !== movieId))
            })
            .catch((err) => console.error(`Ошибка удаления фильма ${err}`))
    }

    function handleSaveButton(data) {
        const isSaved = savedMovies.some(element => data.id === element.movieId)
        const checkedMovie = savedMovies.filter((movie) => {
            return movie.movieId === data.id
        })
        if (!isSaved) {
            mainApi.addMovie(data, localStorage.jwt)
                .then(res => {
                    setSavedMovies([...savedMovies, res])
                })
                .catch((err) => console.error(`Ошибка сохранения фильма ${err}`))

        } else {
            deleteMovie(checkedMovie[0]._id)
        }
    }

    return (
        checkIsLogged ? <Preloader/> :
            <CurrentUserContext.Provider value={currentUser}>
                <Routes>
                    <Route path="/signin" element={<Login onLogin={login} isRequesting={isRequesting}/>}/>
                    <Route path="/signup"
                           element={<Register onRegistration={registration} isRequesting={isRequesting}/>}/>
                    <Route path="/" element={<><Header loggedIn={isLoggedIn}/><Main/><Footer/></>}/>
                    <Route path="/movies" element={
                        <>
                            <Header loggedIn={isLoggedIn}/>
                            <ProtectedRoute element={Movies} handleSaveButton={handleSaveButton}
                                            savedMovies={savedMovies}
                                            isFirstSearch={isFirstSearch} setIsFirstSearch={setIsFirstSearch}
                                            loggedIn={isLoggedIn}/>
                            <Footer/>
                        </>
                    }/>
                    <Route path="/saved-movies" element={
                        <>
                            <Header loggedIn={isLoggedIn}/>
                            <ProtectedRoute element={SavedMovies} handleDeleteButton={deleteMovie}
                                            savedMovies={savedMovies} loggedIn={isLoggedIn}/>
                            <Footer/>
                        </>
                    }/>
                    <Route path="/profile" element={
                        <>
                            <Header loggedIn={isLoggedIn}/>
                            <ProtectedRoute element={Profile} isRequesting={isRequesting} sendUserData={sendUserData}
                                            onLogOut={logOut} loggedIn={isLoggedIn}/>
                            <Footer/>
                        </>
                    }/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </CurrentUserContext.Provider>
    )
}

export default App;
