import React from 'react';

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantStatus: 'CLOSED'
    }
  }

  render() {

    let statusCircle;
    const openStatusCircle = {
      background: '#4FD135'
    }
    const closedStatusCircle = {
      background: '#C01717'
    }

    this.state.restaurantStatus === 'CLOSED' ? statusCircle = closedStatusCircle : statusCircle = openStatusCircle;

    return (
      <div className="restaurant-container row-center">
        <div className="col s12 m7">
          <div className="card small hoverable" onClick={this.props.selectRestaurantClick}>
            <div className="card-image">
              <img src="../images/tempestbar.jpg"/>
            </div>
            <div className="card-title">
              <p className="card-title-text">Tempest Bar</p>
              <p className="status"><span className="status-circle" style={statusCircle}/>{this.state.restaurantStatus}</p>
            </div>
            <div className="card-content">
              <p className="queue-number">people in queue: 10</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default RestaurantCard;


// font-weight: 700 !important;
//     font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
//     font-size: 11px !important;
//     line-height: 16px !important;
//     letter-spacing: 0.2px !important;
//     padding-top: 0px !important;
//     padding-bottom: 0px !important;
//     color: #484848 !important;
//     text-overflow: ellipsis !important;
//     overflow: hidden !important;
//     white-space: nowrap !important;
//     text-transform: uppercase !important;
//     margin-top: 12px !important;
//     margin-bottom: 2px !important;
// }