const db = require('./index.js');

const addToQueue = () => {
  return db.addToQueue({name: 'Tiffany', restaurantId: 1, size: 2, mobile: '(415) 847-5697'})
    .then(() => db.addToQueue({name: 'Neha', restaurantId: 1, size: 3, mobile: '(415) 896-5693', email: 'nez@gmail.com'}))
    .then(() => db.addToQueue({name: 'Eugene', restaurantId: 2, size: 3, mobile: '(415) 785-5678', email: 'eugene@gmail.com'}))
    .then(() => db.addToQueue({name: 'Johnny', restaurantId: 2, size: 2, mobile: '(415) 684-4758'}));
};

const addRestaurants = () => {
  return db.Restaurant.findOrCreate({where: {name: 'Tempest', phone: '(123) 456-7890', image: '../images/tempestbar.jpg', status: 'Open', 'average_wait': 10, 'total_wait': 10}})
    .then(() => db.Restaurant.findOrCreate({where: {name: 'House of Prime Rib', phone: '(415) 885-4605', image: '../images/houseofprimerib.jpg', status: 'Open', 'average_wait': 10, 'total_wait': 10}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Tsunami Panhandle', phone: '(415) 567-7664', image: '../images/tsunamipanhandle.jpg', status: 'Open', 'average_wait': 5, 'total_wait': 5}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Kitchen Story', phone: '(415) 525-4905', image: '../images/kitchenstory.jpg', status: 'Open', 'average_wait': 15, 'total_wait': 15}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Burma Superstar', phone: '(415) 387-2147', image: '../images/burmasuperstar.jpg', status: 'Open', 'average_wait': 10, 'total_wait': 10}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'State Bird Provisions', phone: '(415) 795-1272', image: '../images/statebirdprovisions.jpg', status: 'Closed', 'average_wait': 8, 'total_wait': 8}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Limon Rotisserie', phone: '(415) 821-2134', image: '../images/limonrotisserie.jpg', status: 'Closed', 'average_wait': 12, 'total_wait': 12}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Nopa', phone: '(415) 864-8643', image: '../images/nopa.jpg', status: 'Open', 'average_wait': 20, 'total_wait': 20}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Farmhouse Kitchen', phone: '(415) 814-2920', image: '../images/farmhousekitchen.jpg', status: 'Open', 'average_wait': 15, 'total_wait': 15}}))
    .then(() => db.Restaurant.findOrCreate({where: {name: 'Tuba', phone: '(415) 826-8822', image: '../images/tuba.jpg', status: 'Open', 'average_wait': 5, 'total_wait': 5}}));
// .then(() => db.Restaurant.findOrCreate({where: {name: 'Subway', phone: '(123) 456-7990', image: '../images/subway.jpg', status: 'Open', 'average_wait': 3, 'total_wait': 3}}))
// .then(() => db.Restaurant.findOrCreate({where: {name: 'Chipotle', phone: '(132) 456-7990', image: '../images/chipotle.jpg', status: 'Closed', 'average_wait': 3, 'total_wait': 3}}));
};

module.exports = {
  addRestaurants: addRestaurants,
  addToQueue: addToQueue
}; 
