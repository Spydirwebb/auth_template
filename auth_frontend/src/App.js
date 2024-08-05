import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Login from './pages/Login'
import Testing from './pages/Testing'
import Dashboard from './pages/Dashboard';
import PrivateRoute from './routes/PrivateRoute';

import AuthProvider from './auth/AuthProvider';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/testing" element={<Testing />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
