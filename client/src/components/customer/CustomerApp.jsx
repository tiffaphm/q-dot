import React from 'react';

class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="customer-home">
        <h1 className="logo-banner">q.</h1>
        <div className="group-size-buttons-container">
          <h2>buttons will go here</h2>
        </div>
      </div>
    )
  }

}

export default CustomerApp;