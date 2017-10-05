import React from 'react';

const CustomerListEntry = (props) => {
  

  return (
    <div className="row panel-body">
      <div className="col-md-9">
        <h4>{props.queue.customer.name}</h4>
        <p>Group Size: {props.queue.size}</p>
      </div>
      <div className="col-md-3">
        {props.index === 0 
          ? <button className="btn-primary btn-sm" data-toggle="modal" data-target="#remove-warning">Remove</button>
          : []
        }
        <div id="remove-warning" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h2 className="modal-title">Remove First Customer In Queue</h2>
              </div>
              <div className="modal-body">
                <p>Warning Goes Here</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-warning" data-dismiss="modal" onClick={() => props.removeCustomer(props.queue.id)}>Customer Not Shown Up</button>
                <button className="btn btn-success" data-dismiss="modal" onClick={() => props.removeCustomer(props.queue.id)}>Customer Here</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerListEntry;