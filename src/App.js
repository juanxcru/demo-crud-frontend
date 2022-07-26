//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//import ListUsersComponent from './components/ListUsersComponent';
import ListUsersComponentRB from './components/ListUsersComponentRB';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'
import CreateUserComponent from './components/CreateUserComponent';



function App() {
  return (
    <div>
      
        <div>
          <HeaderComponent />
            <div className="container-fluid">
               
               
                <Routes>
                    <Route exact path="/" element={<ListUsersComponentRB/>}/> 
                      
                    <Route exact path="/crear-usuario" element={<CreateUserComponent/>}/> 
                  
                
                </Routes>
               
            </div>
          <FooterComponent />
          </div>   
      
    </div>


  )
}

export default App;
