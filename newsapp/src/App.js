import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

export default class App extends Component {
  c = 'John';
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<News pageSize ={6} country={"us"} category = {"science"}/>}/>
        </Routes>
        
        </Router>
      </div>
    )
  }
}

