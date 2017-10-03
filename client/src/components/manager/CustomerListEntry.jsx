import React from 'react';

const CustomerListEntry = (props) => {
  

  return (
    <div className="row panel-body">
      <div className="col-md-9">
        <h4>Customer Goes Here</h4>
        <p>info goes here</p>
      </div>
      <div className="col-md-3">
        {props.index === '0' 
          ? <button className="btn-danger btn-sm" onClick={() => props.removeCustomer(props.customer.id)}>delete goes here</button>
          : []
        }
      </div>
    </div>
  );
};

export default CustomerListEntry;