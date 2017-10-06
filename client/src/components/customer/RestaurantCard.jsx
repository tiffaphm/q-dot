import React from 'react';

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantStatus: this.props.restaurant.status
    };
  }

  render() {
    let statusCircle;
    const openStatusCircle = {
      background: '#4FD135'
    };
    const closedStatusCircle = {
      background: '#C01717'
    };
    this.state.restaurantStatus === 'Closed' ? statusCircle = closedStatusCircle : statusCircle = openStatusCircle;
    
    let image;
    this.props.restaurant.image === '../images/blank.png' ? image = '../images/randomrestaurant.jpg' : image = this.props.restaurant.image;
    return (
      <div className="restaurant-container">
        <div className="col s12 m7">
          <div className="card small hoverable" onClick={() => this.props.selectRestaurant(this.props.restaurant.id)}>
            <div className="card-image">
              <img src={image}/>
            </div>
            <div className="card-title">
              <p className="card-title-text">{this.props.restaurant.name}</p>
              <p className="status"><span className="status-circle" style={statusCircle}/>{this.state.restaurantStatus}</p>
            </div>
            <div className="card-content">
              <span className="queue-number">groups in queue: {this.props.restaurant.queue_count} </span>
              <span className="wait-time">wait time: {this.props.restaurant.wait_time} mins</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;