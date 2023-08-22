// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Registration from './components/Registration';
import Login from './components/Login';


function App() {
  return (
            // Switch will not take redirect in Router5 (it not have Routes). So in routing 6
            // redirect is possible with the routes (not have Switch)
    <Router>
      <Routes>
          <Route exact path="/" element={<Registration/>}/> 
              {/*  OR */}
          {/* <Route exact path="/register" Component={Registration}/> */}
          <Route exact path='/login' element={<Login/>}/>

          {/* <Route exact path='/login' Component={Login}/> */}
      </Routes>
  </Router>
  );
}

export default App;
