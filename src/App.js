//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ListUsersComponent from './components/ListUsersComponent';
import ListUsersComponentRB from './components/ListUsersComponentRB';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'


function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<ListUsersComponentRB/>}/> 
                </Routes>
                
            </div>
          <FooterComponent />
          </div>   
      </Router>
    </div>


  )
}

export default App;
