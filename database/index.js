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
  'queue_count': Sequelize.INTEGER,
  status: Sequelize.STRING

});

// Relationship between Restaurant & Queue
Restaurant.hasMany(Queue);
Queue.belongsTo(Restaurant);

//Relationship between Customer & Queue
Customer.hasOne(Queue);
Queue.belongsTo(Customer);


//Uncomment and use this if dropping tables and comment out the basic sync ones below
// Restaurant.sync({force: true})
//   .then(() => Customer.sync({force: true}))
//   .then(() => Queue.sync({force: true}))
//   .catch(error => console.log('Error syncing data (force true)', error));

Customer.sync()
  .then(() => Restaurant.sync())
  .then(() => Queue.sync())
  .catch(error => console.log('error syncing data', error));

// const phoneNumberFormatter = (number) => {
//   return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`;
// };

const nameFormatter = (name) => {
  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
};

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

const addToCustomers = (params) => {
  return Customer.findOne({where: {mobile: params.mobile}})
    .then(customer => {
      if (customer === null) {
        const customer = {
          name: nameFormatter(params.name),
          mobile: params.mobile
        };

        if (params.email) {
          customer.email = params.email;  
        }

        return Customer.create(customer);
      } else {
        return customer;
      }
    });
};

const addToQueue = (params) => {

  const queueInfo = {
    size: params.size,
  };

  return addToCustomers(params)
    .then(customer => {
      queueInfo.customerId = customer.dataValues.id;
      return findInfoForOneRestaurant(params.restaurantId);
    })
    .then(restaurant => {
      if (restaurant.status === 'Open') {
        queueInfo.position = restaurant.queue_count + 1;
        queueInfo.restaurantId = restaurant.id;
        return Restaurant.upsert({'queue_count': queueInfo.position, phone: restaurant.phone});
      } else {
        return restaurant.status;
      }
    })
    .then(result => {
      return result === 'Closed' ? result : Queue.create(queueInfo);
    });
};

module.exports = {
  db: db,
  Customer: Customer,
  Queue: Queue,
  Restaurant: Restaurant,
  dropAllTables: dropAllTables,
  findInfoForAllRestaurants: findInfoForAllRestaurants,
  findInfoForOneRestaurant: findInfoForOneRestaurant,
  addToCustomers: addToCustomers,
  addToQueue: addToQueue,
  // phoneNumberFormatter: phoneNumberFormatter,
  nameFormatter: nameFormatter
};
