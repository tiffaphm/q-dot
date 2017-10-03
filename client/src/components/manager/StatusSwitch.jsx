import React from 'react';

const StatusSwitch = (props) => {
  
  return (
    <div>
      <button type="button" className="btn btn-danger btn-lg" data-toggle="modal" data-target="#close-queue-warning">Close Queue</button>

      <div id="close-queue-warning" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h2 className="modal-title">Warning</h2>
            </div>
            <div className="modal-body">
              <p>Warning Goes Here</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" onClick={() => props.switchStatus(props.restaurantInfo.status)}>Conform</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSwitch;