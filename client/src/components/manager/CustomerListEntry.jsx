import React from 'react';

const CustomerListEntry = (props) => {
  

  return (
    <div class="row">
      <div class="col-md-7">
        <h4>Customer Goes Here</h4>
        <p>info goes here</p>
      </div>
      <div class="col-md-3">
        <button class="btn-danger btn-sm">delete goes here</button>
      </div>
    </div>
  );
};

export default CustomerListEntry;