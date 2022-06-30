import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../styles/App.css";
import { AuthProvider } from './Contexts/AuthContext';
// import { AuthProvider } from '../components/Contexts/AuthContextNew';
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Signup from './Pages/Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute> <Signup /> </PublicRoute>} />
            <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
            <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
            <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>    
  );
}

export default App;
