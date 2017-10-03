const db = require('./index.js');

const addCustomers = () => {
  return db.Customer.findOrCreate({where: {name: 'Tiffany', mobile: '(234) 563-9762'}})
    .then(() => db.Customer.findOrCreate({where: {name: 'Neha', mobile: '(786) 987-4567', email: 'nez@gmail.com'}}))
    .then(() => db.Customer.findOrCreate({where: {name: 'Eugene', mobile: '(975) 097-8967', email: 'eugene@gmail.com'}}))
    .then(() => db.Customer.findOrCreate({where: {name: 'Johnny', mobile: '(456) 730-5746'}}));
};

const addToQueue = () => {
  return db.Queue.findOrCreate({where: {customerId: 1, restaurantId: 1, position: 1, size: 1}})
    .then(() => db.Queue.findOrCreate({where: {customerId: 2, restaurantId: 2, position: 1, size: 1}}))
    .then(() => db.Queue.findOrCreate({where: {customerId: 3, restaurantId: 1, position: 2, size: 4}}))
    .then(() => db.Queue.findOrCreate({where: {customerId: 4, restaurantId: 2, position: 2, size: 4}}));
};

const addRestaurants = () => {
  return db.Restaurant.findOrCreate({where: {name: 'Tempest', phone: '(123) 456-7890', image: '../images/blank.png', 'queue_count': 0, status: 'Open'}})
    .then(() => db.Restaurant.findOrCreate({where: 
      {name: 'Subway', phone: '(123) 456-7990', image: '../images/blank.png', 'queue_count': 0, status: 'Open'}}));
};

module.exports = {
  addRestaurants: addRestaurants,
  addCustomers: addCustomers,
  addToQueue: addToQueue
}; 