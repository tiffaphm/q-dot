import React from 'react';

const StatusSwitch = (props) => {
  
  return (
    <div>
      <h3>{props.status === 'Open' ? 'Open for Queue' : 'Close for Queue'}</h3>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#close-queue-warning">Close Queue</button>

      <div id="close-queue-warning" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h2 className="modal-title">Warning</h2>
            </div>
            <div className="modal-body">
              <p><b>{props.status === 'Closed' ? 'Open' : 'Close'}</b> for Queue?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => props.switchStatus(props.restaurantInfo.status)}>Conform Operation</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSwitch;