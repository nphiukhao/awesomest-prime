import logo from './logo.svg';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';


import About from './Components/About'

import './App.css';

function App() {

const [title, setTitle] = useState("");

  function getRecipe() {
    console.log('hello')
        return fetch(`https://ghibliapi.herokuapp.com/films/`)
        .then(res =>             
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )}

  function buildItems() {
    getRecipe().then(response => setTitle(response[Math.floor(Math.random()*response.length)].title))
    
  }      
  return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>

          </ul>
        </header>
          <h1>Movie: {title}</h1>
          <button type="button" className="btn btn-primary" onClick={e => buildItems()}>give me a movie</button>
          <Route path='/about' component={About} />
      </div>

  );
}

export default App;
