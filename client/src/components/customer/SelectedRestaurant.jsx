import React from 'react';
import RestaurantLogoBanner from './RestaurantLogoBanner.jsx';
import CustomerInfoForm from './CustomerInfoForm.jsx';
import CustomerQueueInfo from './CustomerQueueInfo.jsx';

class SelectedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoSubmitted: false,
    }
  }

  render() {
    return (
      <div className="selected-restaurant">
        <RestaurantLogoBanner />
        {this.state.infoSubmitted === false ? <CustomerInfoForm /> : <CustomerQueueInfo />}
      </div>
    )
  }
}

export default SelectedRestaurant;