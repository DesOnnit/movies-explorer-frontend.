import Main from '../Main/Main'
import { Switch, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
import Navigation from '../Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Navigation />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Navigation />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Navigation />
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;