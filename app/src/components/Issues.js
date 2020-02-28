import React from 'react';
import IssueCard from './IssueCard'
import dummydata from '../dummydata'
import Searchbar from './Searchbar';

const Issues = props => {
  return (
    <div className="issuesDiv">
      <h1 className="pagetitle">Issues</h1>
      <Searchbar />
      <div className="issuesContainer">
        {dummydata.map(element => {
          return <IssueCard issue={element} key={Math.random()}/>
        })}
      </div>
    </div>
  )
}

export default Issues