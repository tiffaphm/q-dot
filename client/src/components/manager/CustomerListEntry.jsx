import React from 'react';

const CustomerListEntry = (props) => {
  

  return (
    <div className="row panel-body">
      <div className="col-md-8">
        <h4>{props.queue.customer.name}</h4>
        <p><i className="fa fa-mobile fa-2x" aria-hidden="true"></i>Contact: {props.queue.customer.mobile}</p>
        {props.queue.customer.email ? <p>Email: {props.queue.customer.email}</p> : null}
        <p>Group Size: {props.queue.size}</p>
        <p>Wait Time: {props.queue.wait} mins</p>
      </div>
      <div className="col-md-4 row">
        <button className="btn-primary btn-sm" data-dismiss="modal" onClick={() => props.showModal(props.queue)}>Remove</button>
        <button className="btn-success btn-sm" onClick={() => props.notiCustomer(props.queue.id)}>Notify</button>
      </div>
    </div>
  );
};

export default CustomerListEntry;