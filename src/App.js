import './App.css';
import React from ".";
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Error404 from './Components/Error404/Error404'
import Users from './Components/Users/Users'

function App() {
  return (
      <div className='master'>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/error-404" element={<Error404 />} />
            <Route exact path="/users" element={<Users />} />
        </Routes>
      </div>
  );
}

export default App;
