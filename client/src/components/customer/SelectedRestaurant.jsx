import React from 'react';
// import RestaurantLogo from './RestaurantLogo.jsx';
import CustomerInfoForm from './CustomerInfoForm.jsx';
import CustomerQueueInfo from './CustomerQueueInfo.jsx';

class SelectedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoSubmitted: false,
      selectRestaurant: false
    }
  }

  render() {
    return (
      <div className="selected-restaurant">
        {this.state.infoSubmitted === false ? <CustomerInfoForm /> : <CustomerQueueInfo />}
      </div>
    )
  }
}

export default SelectedRestaurant;