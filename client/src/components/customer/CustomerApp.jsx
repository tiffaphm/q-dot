import React from 'react';
import CustomerNav from './CustomerNav.jsx';
import GroupSizeButtons from './GroupSizeButtons.jsx';
import RestaurantCard from './RestaurantCard.jsx';
import SelectedRestaurant from './SelectedRestaurant.jsx';

class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.selectRestaurantClick = this.selectRestaurantClick.bind(this);
    this.state = {
      selectRestaurant: false
    }
  }

  selectRestaurantClick() {
    this.setState({
      selectRestaurant: true
    })
  }


  render() {
    const defaultHomeRender = 
      <div>
        <CustomerNav />
        <GroupSizeButtons />
        <div className="select-restaurant-container">
          <h4>Select a restaurant</h4>
          <RestaurantCard selectRestaurantClick={this.selectRestaurantClick} />
        </div>
      </div>

    let currentRender;
    // this is a very hacky way of rendering a different page. will refactor to use react router later.
    this.state.selectRestaurant === false ? currentRender = defaultHomeRender : currentRender = <SelectedRestaurant />

    return (
      <div className="customer-home">
        {currentRender}
      </div>
    )
  }

}

export default CustomerApp;

