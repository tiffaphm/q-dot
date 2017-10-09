import React from 'react';
import $ from 'jquery';
import CustomerNav from './CustomerNav.jsx';
import CustomerBanner from './CustomerBanner.jsx';

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
        <CustomerBanner customer={this.state.currentCustomer}/>
        <h5>YOUR QUEUE NUMBER IS</h5>
        <div className="queue-position-display">
          <span className="position-number">{this.state.currentCustomer.position}</span>
          <h6>your approximate wait time is:</h6>
          <span className="wait-time-indicator">{this.state.currentCustomer.wait} minutes</span>
          <p>There are {this.state.currentCustomer.queueInFrontCount} groups in front of you</p>
        </div>
      </div>
    );
  }
}

export default QueueInfo;