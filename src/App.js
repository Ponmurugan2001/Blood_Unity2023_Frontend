import {Route,Routes} from 'react-router-dom'
import HomePage from './HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoutes';
import PublicRoute from './components/Routes/PublicRoute';

function App() {
  return (
    
    <div >
      <ToastContainer/>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
        <HomePage/>
        </ProtectedRoute>

        }/>
        
        <Route path='/login' element={
        <PublicRoute>
        <Login/>
        </PublicRoute>  
        }/>
        <Route path='/register' element={
          <PublicRoute>  
        <Register/>
        </PublicRoute>  
        }/>
      </Routes>
    </div>
    
  );
}

export default App;
