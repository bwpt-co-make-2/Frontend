import React, { useState, useEffect } from 'react';
import IssueCard from './IssueCard'
import dummydata from '../dummydata'
import Searchbar from './Searchbar';
import Axios from 'axios';

const Issues = props => {
  const [sortedIssues, setSortedIssues] = useState([])
  const [filteredIssues, setFilteredIssues] = useState([])

  useEffect(() => {
    setSortedIssues(dummydata.sort((a, b) => b.upvotes - a.upvotes)); //axios request would go here
    setFilteredIssues(dummydata);
    Axios.get("https://thatcher-comake.herokuapp.com/issues")
      .then((response) => {
        console.log(response)
      })
  }, [])

  return (
    <div className="issuesDiv">
      <h1 className="pagetitle">Issues</h1>
      <Searchbar sortedIssues={sortedIssues} setFilteredIssues={setFilteredIssues}/>
      <div className="issuesContainer">
        {filteredIssues.map(element => {
          return <IssueCard issue={element} key={element.id}/>
        })}
      </div>
    </div>
  )
}

export default Issues