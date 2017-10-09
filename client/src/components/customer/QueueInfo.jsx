import React from 'react';
import $ from 'jquery';
import io from 'socket.io-client';

class QueueInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCustomer: {},
      ready: false
    };
    // socket initialize
    this.socket = io();
    // dynamically update if table is ready
    this.socket.on('noti', (message) => {
      console.log(message);
      this.setState({ ready: true });
    });
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
        // report queueId to server socket
        this.socket.emit('customer report', id);
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
        {
          this.state.ready 
            ? <h3 className="ready-noti">Your table is ready!</h3>
            : <div className="queue-position-display">
              <span className="position-number">{this.state.currentCustomer.position}</span>
              <p>your approximate wait time is:</p>
              <span className="wait-time-indicator">{this.state.currentCustomer.wait}</span>
            </div>
        }
      </div>
    );
  }
}

export default QueueInfo;