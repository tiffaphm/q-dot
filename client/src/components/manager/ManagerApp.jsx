import React from 'react';
import CustomerList from './CustomerList.jsx';
import StatusSwitch from './StatusSwitch.jsx';
import $ from 'jquery';

class ManagerApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      customers: {},
      restaurantInfo: {}
    };
  }

  switchStatus(open) {
    
  }

  removeCustomer(customerId) {

  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Restaurant Name Goes Here</h1>
          <p>Manager Home Page</p>
          <StatusSwitch switchStatus={this.switchStatus.bind(this)}/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Current People In Queue:</h2>
              <div id="number-in-queue">3</div>
            </div>
            <div className="col-md-6">
              <CustomerList customers={this.state.customers} removeCustomer={this.removeCustomer.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerApp;