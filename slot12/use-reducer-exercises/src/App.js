import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from '../src/components/CounterComponent';
import LightSwitch from '../src/components/LightSwitch';
import QuestionBank from '../src/components/QuestionBank';
function App() {
  return (
    <div>
      <CounterComponent />
      <LightSwitch />
      <QuestionBank />
    </div>
  );
}

export default App;
