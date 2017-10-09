import React from 'react';
import CustomerNav from './CustomerNav.jsx';
import CustomerMain from './CustomerMain.jsx';
import CustomerBanner from './CustomerBanner.jsx';

// render the big components here
const CustomerApp = () => (
  <div>
    <CustomerNav />
    <CustomerMain />
  </div>
);

export default CustomerApp;