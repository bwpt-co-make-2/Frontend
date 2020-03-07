import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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

  const [sortedIssues, setSortedIssues] = useState([])
  const [filteredIssues, setFilteredIssues] = useState([])
  
  useEffect(() => {
    let newdata = [];

    Axios.get("https://cors-anywhere.herokuapp.com/https://thatcher-comake.herokuapp.com/issues")
      .then((response) => {
        console.log(response.data)
        response.data.forEach((element, index)=> {
          element.id = dummydata.length + index + 1;
          element.zipcode = element.zipcode.toString();
        })
        newdata = dummydata.concat(response.data)
        setSortedIssues(newdata.sort((a, b) => b.upvotes - a.upvotes));
        setFilteredIssues(newdata);
      })
    
  }, [])

  
  return (
    <div className="App">
      <NavStrap />
      <Route path='/signup' component={Signup}/>
      <Route path='/signin' component={Signin}/>
      <Route exact path='/issues' render={() =>
        <Issues sortedIssues={sortedIssues} filteredIssues={filteredIssues} setFilteredIssues={setFilteredIssues}/>
      }/>
      <Route path='/issues/:id' render={() => 
        <IssueView issues={sortedIssues}/>
      }/>
      <Route path='/createissue' component={CreateIssue}/>
    </div>
  );
}

export default App;
