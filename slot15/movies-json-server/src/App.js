import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import MovieManager from './pages/MovieManager';
import { AuthProvider, useAuthState } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import { MovieProvider } from './contexts/MovieContext';
function AppContent() {
  const { user } = useAuthState();

  // Nếu chưa login → Hiện LoginPage
  if (!user) {
    return <LoginPage />;
  }

  // Nếu login rồi → Hiện Header + MovieManager
  return (
      <MovieProvider>
        <Header />
        <MovieManager />
      </MovieProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}


export default App;
