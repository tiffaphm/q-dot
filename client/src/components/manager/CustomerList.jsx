import React from 'react';
import CustomerListEntry from './CustomerListEntry.jsx';

const CustomerList = (props) => {
  

  return (
    <div>
      <h2>Customer List Goes Here</h2>
      <CustomerListEntry />
      <CustomerListEntry />
      <CustomerListEntry />
    </div>
  );
};

export default CustomerList;