import React from 'react';
import RestaurantLogoBanner from './RestaurantLogoBanner.jsx';
import CustomerInfoForm from './CustomerInfoForm.jsx';
import CustomerQueueInfo from './CustomerQueueInfo.jsx';
import RestaurantInformation from './RestaurantInformation.jsx';
import io from 'socket.io-client';

class SelectedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.customerInfoSubmitted = this.customerInfoSubmitted.bind(this);
    this.state = {
      infoSubmitted: false,
      queueId: 0,
      queuePosition: 0
    };
    this.socket = io();
  }

  customerInfoSubmitted(id, position) {
    this.setState({
      infoSubmitted: true,
      queueId: id,
      queuePosition: position
    });
    this.socket.emit('customer report', this.state.queueId);
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
        {this.state.infoSubmitted === false ? <RestaurantInformation restaurant={this.props.currentRestaurant}/> : <RestaurantInformation restaurant={this.props.currentRestaurant}/>}
        {this.state.infoSubmitted === false ? <CustomerInfoForm currentRestaurantId={this.props.currentRestaurant.id} customerInfoSubmitted={this.customerInfoSubmitted} groupSize={this.props.groupSize}/> : <CustomerQueueInfo />}
      </div>
    );
  }
}

export default SelectedRestaurant;