import React from 'react';

class CustomerInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
      customerMobile: '',
      customerEmail: '',
      groupSize: 0,
      currentRestaurantId: this.props.currentRestaurantId
    }
  }

  render() {
    return(
      <div className="customer-info-input-container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label for="first_name" data-error="wrong" data-success="right">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label for="last_name" data-error="wrong" data-success="right">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="telephone" type="tel" className="validate" />
                <label for="telephone" data-error="wrong" data-success="right">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email" data-error="wrong" data-success="right">Email</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CustomerInfoForm;
        