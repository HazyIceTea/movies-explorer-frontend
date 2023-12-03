import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";

function App() {
    return (
        <Routes>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/" element={<><Header loggedIn={false}/><Main/><Footer/></>}/>
            <Route path="/movies" element={<><Header loggedIn={true}/><Movies/><Footer/></>}/>
            <Route path="/saved-movies" element={<><Header loggedIn={true}/><SavedMovies/><Footer/></>}/>
            <Route path="/profile" element={<><Header loggedIn={true}/><Profile/></>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App;
