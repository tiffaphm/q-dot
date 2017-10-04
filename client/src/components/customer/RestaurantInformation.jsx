import React from 'react';

const RestaurantInformation = (props) => {
  let groupsText;
  props.restaurant.queue_count === 1 ? groupsText = 'group queued' : groupsText = 'groups queued';

  let statusCircle;
  const openStatusCircle = {
    background: '#4FD135'
  }
  const closedStatusCircle = {
    background: '#C01717'
  }
  props.restaurant.status === 'Closed' ? statusCircle = closedStatusCircle : statusCircle = openStatusCircle;
  
  return (
    <div className="restaurant-info-container">
      <div className="restaurant-info">
        <div className="restaurant-name">{props.restaurant.name}</div>
        <div className="restaurant-queue-info">
          <div className="restaurant-queue-count">{props.restaurant.queue_count} {groupsText}</div>
          <div className="restaurant-queue-status"><span className="status-circle" style={statusCircle}/>{props.restaurant.status}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInformation;