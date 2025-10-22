import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/LightSwitch';
import LoginForm from './components/LoginForm';
import LoginForm2 from './components/LoginForm2';
import SearchItem from './components/SearchItem';
import SearchPeople from './components/SearchPeople';
import Signup from './components/Signup';
function App() {
  return (
    <div>
      <CounterComponent />
      <LightSwitch />
      <LoginForm />
      <LoginForm2 />
      <SearchItem />
      <SearchPeople />
      <Signup/>
    </div>
  );
}

export default App;
