import logo from './logo.svg';
import './App.css';
import FooterPage from './pages/FooterPage';
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <HomePage />
      <FooterPage />
    </div>
  );
}

export default App;
