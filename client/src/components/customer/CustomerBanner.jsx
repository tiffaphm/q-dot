import React from 'react';

// nav bar
const CustomerBanner = (props) => {

  let welcomeMessage;
  (props.customer) ? welcomeMessage = `Welcome back, ${props.customer.name}!` : welcomeMessage = 'Welcome!';

  let months = new Array('January', 'February', 'March', 
  'April', 'May', 'June', 'July', 'August', 'September', 
  'October', 'November', 'December');
  let d = new Date();

  let curr_date = d.getDate();
  let curr_month = d.getMonth();
  let date_now = (curr_date + ' ' + months[curr_month]);

  return (
    <div className="gradient-banner-container">
      <div className="banner-content">
        <p className="banner-title">{welcomeMessage}</p>
      </div>
     <div className="date-container">
       <p className="date-info">Today is {date_now}</p>
      </div>
    </div>
  )
};

export default CustomerBanner;

/*.date-container {
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 75px;
  text-align: center !important;
  background-color: #053C5E !important;
}

.date-info {
  font-family: Roboto, Helvetica Neue, sans-serif !important;
  font-size: 18px !important;
  color: #fff !important;
  font-weight: 200 !important;
  line-height: 1 !important;
  top: calc(50% + 5px);
  left: 50%;
  margin-top: 29px !important;
}*/