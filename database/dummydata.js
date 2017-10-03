const db = require('./index.js');


const addCustomers = () => {
  
  db.Customer.findOrCreate({where: {name: 'Tiffany', mobile: '(234) 563-9762'}})
    .then(result => db.Customer.findOrCreate({where: {name: 'Neha', mobile: '(786) 987-4567', email: 'nez@gmail.com'}}))
    .then(result => db.Customer.findOrCreate({where: {name: 'Eugene', mobile: '(975) 097-8967', email: 'eugene@gmail.com'}}))
    .then(result => db.Customer.findOrCreate({where: {name: 'Johnny', mobile: '(456) 730-5746'}}));
};

const addToQueue = () => {
  db.Queue.findOrCreate({where: {customerId: 1, restaurantId: 1, position: 1, size: 1}})
    .then(result => db.Queue.findOrCreate({where: {customerId: 2, restaurantId: 2, position: 1, size: 1}}))
    .then(result => db.Queue.findOrCreate({where: {customerId: 3, restaurantId: 1, position: 2, size: 4}}))
    .then(result => db.Queue.findOrCreate({where: {customerId: 4, restaurantId: 2, position: 2, size: 4}}));
};

const addRestaurants = () => {
  db.Restaurant.findOrCreate({where: {name: 'Tempest', phone: '(123) 456-7890', image: '../images/blank.png', 'queue_count': 0}})
    .then(result => db.Restaurant.findOrCreate({where: 
      {name: 'Subway', phone: '(123) 456-7990', image: '../images/blank.png', 'queue_count': 0}}));
};

module.exports = {
  addRestaurants: addRestaurants,
  addCustomers: addCustomers,
  addToQueue: addToQueue
}; 