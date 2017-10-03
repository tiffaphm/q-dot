const Sequelize = require('sequelize');
const { ne } = Sequelize.Op;
let db;

if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL);
} else {
  db = new Sequelize({
    database: 'qdot',
    username: 'postgres',
    password: 'qdot',
    dialect: 'postgres',
    port: 5000
  });
}

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Customer Schema
const Customer = db.define('customer', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  mobile: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: Sequelize.STRING
});

//Queue Schema
const Queue = db.define('queue', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  position: Sequelize.INTEGER,
  size: Sequelize.INTEGER
});

//Restaurant Schema
const Restaurant = db.define('restaurant', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: Sequelize.STRING,
  name: Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  'queue_count': Sequelize.INTEGER

});

// Relationship between Restaurant & Queue
Restaurant.hasMany(Queue);
Queue.belongsTo(Restaurant);

//Relationship between Customer & Queue
Customer.hasOne(Queue);
Queue.belongsTo(Customer);


//Uncomment and use this if dropping tables
// Queue.sync({force: true});
// Customer.sync({force: true});
// Restaurant.sync({force: true});

Customer.sync();
Restaurant.sync();
Queue.sync();


const dropAllTables = () => {
  db.drop().then((result) => console.log('Deleted all tables', result))
    .catch((err) => console.log('Failed to delete table', err));
};


const findInfoForOneRestaurant = (restaurantId) => {
  return Restaurant.find({
    where: {
      id: restaurantId
    },
    include: [Queue]
  });
};

const findInfoForAllRestaurants = () => {
  return Restaurant.findAll();
};

const addDummyData = () => {

  Restaurant.findOrCreate({where: {name: 'Tempest', phone: '1234567890', image: '../images/blank.png', 'queue_count': 0}})
    .then(result => console.log('added/found restaurant in database'))
    .catch(err => console.log('error with restaurant table in database', err));

  Restaurant.findOrCreate({where: {name: 'Subway', phone: '1234567990', image: '../images/blank.png', 'queue_count': 0}});

  Customer.findOrCreate({where: {name: 'Tiffany', mobile: '2345639762'}})
    .then(result => console.log('added/found customer to database'))
    .catch(err => console.log('error adding customer to database', err));

  Customer.findOrCreate({where: {name: 'Neha', mobile: '7869874567'}});
  Customer.findOrCreate({where: {name: 'Eugene', mobile: '9750978967'}});
  Customer.findOrCreate({where: {name: 'Johnny', mobile: '4567305746'}});

  Queue.findOrCreate({where: {customerId: 1, restaurantId: 1, position: 1, size: 1}});
  Queue.findOrCreate({where: {customerId: 2, restaurantId: 2, position: 1, size: 1}});
  Queue.findOrCreate({where: {customerId: 3, restaurantId: 1, position: 2, size: 4}});
  Queue.findOrCreate({where: {customerId: 4, restaurantId: 2, position: 2, size: 4}});

};

module.exports = {
  db: db,
  Customer: Customer,
  Queue: Queue,
  Restaurant: Restaurant,
  dropAllTables: dropAllTables,
  findInfoForAllRestaurants: findInfoForAllRestaurants,
  findInfoForOneRestaurant: findInfoForOneRestaurant,
  addDummyData: addDummyData
};
