import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
