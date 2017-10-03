const db = require('./index.js');

const addCustomers = () => {
  
  return db.Customer.findOrCreate({where: {name: 'Tiffany', mobile: '2345639762'}})
    .then(() => db.Customer.findOrCreate({where: {name: 'Neha', mobile: '7869874567'}}))
    .then(() => db.Customer.findOrCreate({where: {name: 'Eugene', mobile: '9750978967'}}))
    .then(() => db.Customer.findOrCreate({where: {name: 'Johnny', mobile: '4567305746'}}));
};

const addToQueue = () => {
  return db.Queue.findOrCreate({where: {customerId: 1, restaurantId: 1, position: 1, size: 1}})
    .then(() => db.Queue.findOrCreate({where: {customerId: 2, restaurantId: 2, position: 1, size: 1}}))
    .then(() => db.Queue.findOrCreate({where: {customerId: 3, restaurantId: 1, position: 2, size: 4}}))
    .then(() => db.Queue.findOrCreate({where: {customerId: 4, restaurantId: 2, position: 2, size: 4}}));
};

const addDummyData = () => {
  return db.Restaurant.findOrCreate({where: {name: 'Tempest', phone: '1234567890', image: '../images/blank.png', 'queue_count': 0}})
    .then(() => db.Restaurant.findOrCreate({where: 
      {name: 'Subway', phone: '1234567990', image: '../images/blank.png', 'queue_count': 0}}))
    .then(() => addCustomers())
    .then(() => addToQueue());
};

module.exports = addDummyData;