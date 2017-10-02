import React from 'react';

const CustomerListEntry = (props) => {
  

  return (
    <div className="row">
      <div className="col-md-7">
        <h4>Customer Goes Here</h4>
        <p>info goes here</p>
      </div>
      <div className="col-md-3">
        <button className="btn-danger btn-sm" onClick={() => props.removeCustomer(props.customer.id)}>delete goes here</button>
      </div>
    </div>
  );
};

export default CustomerListEntry;