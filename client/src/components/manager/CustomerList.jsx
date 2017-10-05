import React from 'react';
import CustomerListEntry from './CustomerListEntry.jsx';
import _ from 'lodash';

const CustomerList = (props) => {
  let entries = props.queues ? _.map(props.queues, (queue, index) => {
    return <CustomerListEntry key={index} index={index} queue={queue} removeCustomer={props.removeCustomer.bind(this)}/>;
  }) : <div>Nobody In Queue</div>;

  return (
    <div>
      <h2>Customers in Queue</h2>
      <div className="panel panel-default">
        {entries}
      </div>
    </div>
  );
};

export default CustomerList;