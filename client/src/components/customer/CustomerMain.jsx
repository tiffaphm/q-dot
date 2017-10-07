import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerHome from './CustomerHome.jsx';
import SelectedRestaurant from './SelectedRestaurant.jsx';

const CustomerMain = () => (
  <main>
    <Switch>
      <Route exact path='/customer' component={CustomerHome}/>
      <Route path='/restaurant' component={SelectedRestaurant}/>
    </Switch>
  </main> 
)

export default CustomerMain;