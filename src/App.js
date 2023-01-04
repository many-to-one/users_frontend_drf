import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import ProtectedRoute from './utils/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const getUser = async() => {
  const response = await fetch()
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>

        <Header/>
        <Routes>

          <Route>
            <Route element={<ProtectedRoute />} path='/' exact />
          </Route>

          {/* <Route path='/' element={<Home/>} /> */}
          <Route path='/login' element={<Login/>} />

        </Routes>

        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;