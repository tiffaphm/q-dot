import React from 'react';

const StatusSwitch = (props) => {
  
  return (
    <div>
      <button className="btn btn-danger btn-lg" data-toggle="collapse" data-target="#close-queue-warning">Close Queue</button>
      <div className="collapse" id="close-queue-warning">
        Warning Goes Here
        <button className="btn btn-danger btn-lg" onClick={() => props.switchStatus(props.restaurantInfo.status)}>Conform</button>
      </div>
    </div>
  );
};

export default StatusSwitch;