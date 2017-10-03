import React from 'react';
import CustomerNav from './CustomerNav.jsx';
import GroupSizeButtons from './GroupSizeButtons.jsx';
import RestaurantCard from './RestaurantCard.jsx';

class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="customer-home">
        <CustomerNav />
        <GroupSizeButtons />
        <RestaurantCard />
      </div>
    )
  }

}

export default CustomerApp;

