import React from 'react';
import RestaurantLogoBanner from './RestaurantLogoBanner.jsx';
import CustomerInfoForm from './CustomerInfoForm.jsx';
import CustomerQueueInfo from './CustomerQueueInfo.jsx';
import RestaurantInformation from './RestaurantInformation.jsx';

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
        <RestaurantInformation restaurant={this.props.currentRestaurant}/>
        {this.state.infoSubmitted === false ? <CustomerInfoForm currentRestaurantId={this.props.currentRestaurant.id} /> : <CustomerQueueInfo />}
      </div>
    )
  }
}

export default SelectedRestaurant;