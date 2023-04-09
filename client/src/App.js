import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import './App.css';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {
    
    return(
	<div className="App">
    	<BrowserRouter>
            <Routes>
	            <Route element={<Main/>} exact path="/" default />
                <Route element={<Detail/>} path="/:id" />
                <Route element={<Update/>} path="/edit/:id"/>
            </Routes>
    	</BrowserRouter>
        </div>
    ) 
}
export default App;


