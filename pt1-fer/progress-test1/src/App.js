import logo from './logo.svg';
import './App.css';
import NavigationHeader from './components/NavigationHeader';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <AuthProvider>
      <div>
        <AppRoutes />
      </div>
    </AuthProvider>      
      
 );
}

export default App;
