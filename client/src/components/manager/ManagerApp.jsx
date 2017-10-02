import React from 'react';
import CustomerList from './CustomerList.jsx';

class ManagerApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      customers: {},
      restaurantInfo: {}
    };
  }

  render() {
    return (
      <div>
        <div class="jumbotron text-center">
          <h1>Restaurant Name Goes Here</h1>
          <p>Manager Home Page</p>
          <button class="btn btn-default btn-lg">Close Queue</button>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>Current People In Queue:</h2>
              <div id="number-in-queue">3</div>
            </div>
            <div class="col-md-6">
              <CustomerList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerApp;