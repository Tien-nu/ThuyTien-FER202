import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FooterPage from './pages/FooterPage';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import ProfilePage from './pages/ProfilePage';
function App() {
  return (
    <div className="App">
      <HomePage />
      <MoviePage />
      <FooterPage />
    </div>
  );
}

export default App;
