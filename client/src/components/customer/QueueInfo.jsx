import React from 'react';
import $ from 'jquery';

class QueueInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCustomer: {}
    };
  }

  componentDidMount() {
    this.getCurrentCustomerId();
  }

  getCurrentCustomerId() {
    let windowUrl = window.location.href;
    let id = windowUrl.slice(-1);
    
    $.ajax({
      method: 'GET',
      url: `/queues?queueId=${id}`,
      success: (data) => {
        console.log('successfully grabbed queue data for customer', data);
        this.setState({ currentCustomer: data });
      },
      failure: (error) => {
        console.log('failed to grab queue data for customer', error);
      }
    });
  }

  render() {
    return (
      <div className="customer-queue-info-container">
        <div className="queue-divider"></div>
        <h4>Hello, {this.state.currentCustomer.name}</h4>
        <h5>YOUR QUEUE POSITION IS</h5>
        <div className="queue-position-display">
          <span className="position-number">{this.state.currentCustomer.position}</span>
          <p>your approximate wait time is:</p>
          <span className="wait-time-indicator">{this.state.currentCustomer.wait}</span>
        </div>
      </div>
    );
  }
}

export default QueueInfo;