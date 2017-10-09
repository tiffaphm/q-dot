import React from 'react';
import $ from 'jquery';

const CustomerQueueInfo = (props) => (
  <div className="customer-queue-info-container">
    <div className="queue-divider"></div>
      <h5>YOUR QUEUE POSITION IS</h5>
      <div className="queue-position-display">
        <span className="position-number">10</span>
      </div>
  </div>
)

export default CustomerQueueInfo;