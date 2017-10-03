import React from 'react';

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="restaurant-container row-center">
        <div className="col s12 m7">
          <div className="card small">
            <div className="card-image">
              <img src="../images/tempestbar.jpg"/>
              <span className="card-title">restaurant name</span>
            </div>
            <div className="card-content">
              <p>restaurant information</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default RestaurantCard;