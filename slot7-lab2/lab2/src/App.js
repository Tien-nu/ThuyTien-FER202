import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './component/Header';
import Carousel from './component/Carousel';
import Menu from './component/Menu';
import BookingForm from './component/Booking';
function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Menu />
      <BookingForm />
    </div>
  );
}

export default App;
