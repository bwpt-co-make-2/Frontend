import React, { useState, useEffect } from 'react';
import IssueCard from './IssueCard'
import dummydata from '../dummydata'
import Searchbar from './Searchbar';
import Axios from 'axios';

const Issues = props => {
  console.log(props)
  const [sortedIssues, setSortedIssues] = useState(props.sortedIssues)
  const [ filteredIssues, setFilteredIssues ] = useState(props.filteredIssues)
  /* const [sortedIssues, setSortedIssues] = useState([])
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
 */
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