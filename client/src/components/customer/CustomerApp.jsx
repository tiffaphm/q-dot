import React from 'react';
import CustomerNav from './CustomerNav.jsx';
import GroupSizeSelector from './GroupSizeSelector.jsx';
import RestaurantCard from './RestaurantCard.jsx';
import SelectedRestaurant from './SelectedRestaurant.jsx';
import $ from 'jquery';

class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.setGroupSize = this.setGroupSize.bind(this);
    this.state = {
      selectRestaurant: false,
      currentGroupSize: 0,
      currentRestaurant: {},
      restaurantList: []
    };
  }

  componentDidMount() {
    this.getRestaurantList();
  }

  selectRestaurant(id) {
    // this.setState({
    //   selectRestaurant: true
    // })

    $.ajax({
      method: 'GET',
      url: `/restaurants?restaurantId=${id}`,
      success: (data) => {
        console.log('successfully grabbed current restaurant data', data);
        this.setState({ currentRestaurant: data, selectRestaurant: true });
      },
      failure: (error) => {
        console.log('failed to grab current restaurant data', error);
      }
    });
  }

  setGroupSize(size) {
    this.setState({
      currentGroupSize: size
    });
  }

  getRestaurantList() {
    $.ajax({
      method: 'GET',
      url: '/restaurants',
      success: (data) => {
        console.log('successfully grabbed restaurant data', data); 
        this.setState({ restaurantList: data });
      },
      failure: (error) => {
        console.log('failed to grab restaurant data', error);
      }
    });
  }

  render() {
    const defaultHomeRender = 
      <div>
        <GroupSizeSelector setGroupSize={this.setGroupSize}/>
        <div className="select-restaurant-container">
          <h4>Select a restaurant</h4>
          {this.state.restaurantList.map((item, index) => 
            <RestaurantCard restaurant={item} key={index} selectRestaurant={this.selectRestaurant} />
          )}
        </div>
      </div>;

    // this is a very hacky way of rendering a different page. will refactor to use react router later.
    let currentRender;
    this.state.selectRestaurant === false ? currentRender = defaultHomeRender : currentRender = <SelectedRestaurant currentRestaurant={this.state.currentRestaurant} groupSize={this.state.currentGroupSize}/>;

    return (
      <div className="customer-home">
        <CustomerNav />
        {currentRender}
      </div>
    );
  }

}

export default CustomerApp;

