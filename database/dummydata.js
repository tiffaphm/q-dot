const db = require('./index.js');

const addCustomers = () => {
  return db.Customer.findOrCreate({where: {name: db.nameFormatter('tiffany'), mobile: '2345639762'}})
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
  return db.Restaurant.findOrCreate({where: {name: 'Tempest', phone: '(123) 456-7890', image: '../images/tempestbar.jpg', 'queue_count': 2, status: 'Open'}})
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Subway', phone: '(123) 456-7990', image: '../images/subway.jpg', 'queue_count': 2, status: 'Open'}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Chipotle', phone: '(132) 456-7990', image: '../images/chipotle.jpg', 'queue_count': 1, status: 'Closed'}}));
};

module.exports = {
  addRestaurants: addRestaurants,
  addCustomers: addCustomers,
  addToQueue: addToQueue
}; 