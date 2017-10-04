import React from 'react';

class CustomerInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitCustomerInfo = this.submitCustomerInfo.bind(this)
    this.state = {
      customerName: '',
      customerMobile: '',
      customerEmail: '',
      groupSize: 0,
      currentRestaurantId: this.props.currentRestaurantId
    }
  }

  submitCustomerInfo() {
    // send post request back to server
    console.log('submitted info!');
  }

  render() {
    return(
      <div className="customer-info-input-container">
        <div className="row">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name" data-error="wrong" data-success="right">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name" data-error="wrong" data-success="right">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="telephone" type="tel" className="validate" />
                <label htmlFor="telephone" data-error="wrong" data-success="right">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Add to Queue" />
            </div>
        </div>
      </div>
    )
  }
}

export default CustomerInfoForm;
        