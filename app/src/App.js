import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Issues from './components/Issues'
import NavStrap from './components/Nav'
import CreateIssue from './components/CreateIssue';
import IssueView from './components/IssueView';
import dummydata from './dummydata'

function App() {
  return (
    <div className="App">
      <NavStrap />
      <Route path='/signup' component={Signup}/>
      <Route path='/signin' component={Signin}/>
      <Route exact path='/issues' component={Issues}/>
      <Route path='/issues/:id' render={() => 
        <IssueView issues={dummydata}/>
      }/>
      <Route path='/createissue' component={CreateIssue}/>
    </div>
  );
}

export default App;
