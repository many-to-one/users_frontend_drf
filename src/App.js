import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' exact element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;