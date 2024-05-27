import './App.css';
import React from ".";
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

function App() {
  return (
      <div className='master'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
