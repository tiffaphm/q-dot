import React from 'react';
import CustomerListEntry from './CustomerListEntry.jsx';
import _ from 'lodash';

const CustomerList = (props) => {
  let entries = props.customers ? _.map(props.customers, (customer, index) => {
    return <CustomerListEntry key={index} index={index} customer={customer} removeCustomer={props.removeCustomer.bind(this)}/>;
  }) : <div>Nobody In Queue</div>;

  return (
    <div>
      <h2>Customer List Goes Here</h2>
      <div className="panel panel-default">
        {entries}
      </div>
    </div>
  );
};

export default CustomerList;