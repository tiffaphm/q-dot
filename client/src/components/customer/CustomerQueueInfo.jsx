import React from 'react';
import $ from 'jquery';

class CustomerQueueInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="customer-queue-info-container">
        <div className="queue-divider"></div>
          <h4>YOUR CURRENT POSITION IS</h4>
      </div>
    )
  }
}

export default CustomerQueueInfo;