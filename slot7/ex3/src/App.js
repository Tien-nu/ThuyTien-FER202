import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Banner from './component/Banner';
import Navar from './component/Navar';
import Column from './component/Column';
import Footer from './component/Footer';
function App() {
  return (
    <div>
      <Banner />
      <Navar />
      <Column />
      <Footer />
    </div>
  );
}

export default App;
