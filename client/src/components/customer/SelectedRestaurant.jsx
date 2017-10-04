import React from 'react';
import RestaurantLogoBanner from './RestaurantLogoBanner.jsx';
import CustomerInfoForm from './CustomerInfoForm.jsx';
import CustomerQueueInfo from './CustomerQueueInfo.jsx';

class SelectedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoSubmitted: false
    }
  }

  render() {
    let image;
    this.props.currentRestaurant.image === '../images/blank.png' ? image = '../images/randomrestaurant.jpg' : image = this.props.currentRestaurant.image;

    const restaurantImg = {
      backgroundImage: `url(${image})`
    };

    return (
      <div className="selected-restaurant">
        <RestaurantLogoBanner style={restaurantImg} />
        {this.state.infoSubmitted === false ? <CustomerInfoForm /> : <CustomerQueueInfo />}
      </div>
    )
  }
}

export default SelectedRestaurant;