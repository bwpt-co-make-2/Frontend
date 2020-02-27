import React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Issues from './components/Issues'
import NavStrap from './components/Nav'

function App() {
  return (
    <div className="App">
      <NavStrap />
      <Route path='/signup' component={Signup}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/issues' component={Issues}/>
    </div>
  );
}

export default App;
