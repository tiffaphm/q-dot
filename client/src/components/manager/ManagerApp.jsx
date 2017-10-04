import React from 'react';
import CustomerList from './CustomerList.jsx';
import StatusSwitch from './StatusSwitch.jsx';
import Nav from './Nav.jsx';
import $ from 'jquery';

class ManagerApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      queues: undefined,
      restaurantInfo: {}
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'https://q-dot-staging.herokuapp.com/restaurants?restaurantId=1',
      success: (data) => {
        console.log(data);
        this.setState(
          { 
            restaurantInfo: data,
            queues: data.queues
          });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  switchStatus(open) {
    
  }

  removeCustomer(customerId) {

  }

  render() {
    return (
      <div>
        <Nav status={this.state.restaurantInfo.status} switchStatus={this.switchStatus.bind(this)}/>
        <div className="jumbotron text-center jumbotron-billboard">
          <h1>{this.state.restaurantInfo.name || 'Restaurant Name'}</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Current People In Queue:</h2>
              <div id="number-in-queue">{this.state.restaurantInfo.queues ? this.state.restaurantInfo.queues.length : '0'}</div>
            </div>
            <div className="col-md-6">
              <CustomerList queues={this.state.queues} removeCustomer={this.removeCustomer.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerApp;