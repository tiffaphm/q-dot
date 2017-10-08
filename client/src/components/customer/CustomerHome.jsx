import React from 'react';
import CustomerNav from './CustomerNav.jsx';
import GroupSizeSelector from './GroupSizeSelector.jsx';
import RestaurantCard from './RestaurantCard.jsx';
import SelectedRestaurant from './SelectedRestaurant.jsx';
import $ from 'jquery';
import { Link } from 'react-router-dom';


// this is the customer home page
class CustomerHome extends React.Component {
  constructor(props) {
    super(props);
    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.state = {
      selectRestaurant: false,
      currentRestaurant: {},
      restaurantList: []
    };
  }

  componentDidMount() {
    this.getRestaurantList();
  }

  selectRestaurant(id) {
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

    // this is a very hacky way of rendering a different page. will refactor to use react router later.
    let currentRender;
    // this.state.selectRestaurant === false ? currentRender = defaultHomeRender : currentRender = <SelectedRestaurant currentRestaurant={this.state.currentRestaurant} groupSize={this.state.currentGroupSize}/>;

    return (
      <div className="customer-home">
        <div className="select-restaurant-container">
          <h4>Select a restaurant</h4>
          {this.state.restaurantList.map((item, index) => 
            <RestaurantCard restaurant={item} key={index} selectRestaurant={this.selectRestaurant}/>
          )}
        </div>
      </div>
    );
  }

}

export default CustomerHome;

