import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import QuestionBank from './components/QuestionBank';
function App() {
  return (
    <div>
      <LoginForm />
      <SignupForm />
      <QuestionBank />  
    </div>
  );
}

export default App;
