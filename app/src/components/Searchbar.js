import React from 'react';
import { Input } from 'reactstrap'

const Searchbar = props => {
  let filterTerm = '';
  let filtered = [];
  const handleChanges = event => {
    
    filterTerm = event.target.value;
    console.log(filterTerm)
    filtered = props.sortedIssues.filter(element => {
      return element.zipcode.includes(filterTerm)
    })
    props.setFilteredIssues(filtered)
  }

  return (
    <div className='search-div'>
      <Input type="search" placeholder="Search by zipcode" onChange={handleChanges}/>
    </div>
  );
}

export default Searchbar;