import React from 'react';
import { Input } from 'reactstrap'

const Searchbar = props => {
  return (
    <div className='search-div'>
      <Input type="search" placeholder="Search by zipcode" />
    </div>
  );
}

export default Searchbar;