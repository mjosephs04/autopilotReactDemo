import './App.css';
import React from ".";
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'

function App() {
  return (
      <div className='master'>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
