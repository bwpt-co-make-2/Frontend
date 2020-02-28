import React, { useState, useEffect } from 'react';
import IssueCard from './IssueCard'
import dummydata from '../dummydata'
import Searchbar from './Searchbar';

const Issues = props => {
  let [filteredIssues, setFilteredIssues] = useState(dummydata.sort((a, b) => b.upvotes - a.upvotes))

  useEffect(() => {

  })
  return (
    <div className="issuesDiv">
      <h1 className="pagetitle">Issues</h1>
      <Searchbar />
      <div className="issuesContainer">
        {filteredIssues.map(element => {
          return <IssueCard issue={element} key={Math.random()}/>
        })}
      </div>
    </div>
  )
}

export default Issues