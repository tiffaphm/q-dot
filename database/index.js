const Sequelize = require('sequelize');
const { ne, lt, gt } = Sequelize.Op;
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

//Manager Schema
const Manager = db.define('manager', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING
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
  size: Sequelize.INTEGER,
  wait: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  position: Sequelize.INTEGER
});

//Restaurant Schema
const Restaurant = db.define('restaurant', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  'nextPosition': {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  'total_wait': {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  'average_wait': {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  status: Sequelize.STRING,
  image: Sequelize.STRING
});

// Relationship between Restaurant & Queue
Restaurant.hasMany(Queue);
Queue.belongsTo(Restaurant);

//Relationship between Customer & Queue
Customer.hasOne(Queue);
Queue.belongsTo(Customer);

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
    include: [{
      model: Queue,
      where: {
        position: {
          [ne]: null
        }
      },
      include: [Customer],
      required: false
    }]
  });
};

const findInfoForAllRestaurants = () => {
  return Restaurant.findAll({include: [Queue]});
};

const updateRestaurantStatus = (info) => {
  return Restaurant.update({status: info.status}, {where: {id: info.restaurantId}});
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

const getQueueInfo = (restaurantId, customerId, customerPosition) => {
  return Queue.findAndCountAll({
    where: {
      restaurantId: restaurantId,
      position: {
        [ne]: null,
        [lt]: customerPosition
      }
    }
  });
};

const addToQueue = (params) => {

  const queueInfo = {
    size: params.size,
  };

  const response = {};

  return addToCustomers(params)
    .then(customer => {
      queueInfo.customerId = customer.id;
      queueInfo.name = customer.name;
      return Queue.findOne({where: {customerId: customer.id, restaurantId: params.restaurantId}});
      // return findInfoForOneRestaurant(params.restaurantId);
    })
    .then(row => {
      console.log('row for this user', row);
      if (row !== null) {
        throw new Error('Already added');
      } else {
        return findInfoForOneRestaurant(params.restaurantId);
      }
    })
    .then(restaurant => {
      if (restaurant.status === 'Open') {
        queueInfo.position = restaurant.nextPosition + 1;
        queueInfo.wait = restaurant.total_wait;
        queueInfo.restaurantId = restaurant.id;
        let totalWait = restaurant.total_wait + restaurant.average_wait;
        return Restaurant.upsert({'nextPosition': queueInfo.position, 'total_wait': totalWait, phone: restaurant.phone});
      } else {
        throw new Error('Restaurant has closed the queue');
      }
    })
    .then(result => {
      return Queue.create(queueInfo);
    })
    .then(result => {
      response.wait = result.wait;
      response.queueId = result.id;
      response.size = result.size;
      response.position = result.position;
      return getQueueInfo(result.restaurantId, result.customerId, queueInfo.position);
    })
    .then(result => {
      response.queueList = result.rows;
      response.queueCount = result.count;
      return response;
    });
};

const getCustomerInfo = (queueId) => {
  return Queue.findOne({
    where: {
      id: queueId
    },
    include: [Customer]
  });
};

const getManagerInfo = (username) => {
  return Manager.findOne({
    where: {
      username: username
    }
  });
};

const removeFromQueue = (queueId) => {
  let restaurant;
  return Queue.find({where: {id: queueId}, include: [Restaurant]})
    .then(row => {
      if (!row.position && !row.wait) {
        throw new Error('Already removed');
      } else {
        restaurant = row.restaurant;
        return Queue.findAll({where: {position: {[ne]: null, [gt]: row.position}}});
      }
    })
    .then(result => result.map(row => Queue.upsert({wait: row.wait - restaurant.average_wait, id: row.id})))
    .then(() => Restaurant.upsert({'total_wait': restaurant.total_wait - restaurant.average_wait, phone: restaurant.phone}))
    .then(() => Queue.upsert({position: null, wait: null, id: queueId}))
    .then(() => getQueueInfo(restaurant.id, 0, restaurant.nextPosition + 1));
};

module.exports = {
  db: db,
  Customer: Customer,
  Queue: Queue,
  Restaurant: Restaurant,
  Manager: Manager,
  dropAllTables: dropAllTables,
  findInfoForAllRestaurants: findInfoForAllRestaurants,
  findInfoForOneRestaurant: findInfoForOneRestaurant,
  addToCustomers: addToCustomers,
  addToQueue: addToQueue,
  // phoneNumberFormatter: phoneNumberFormatter,
  nameFormatter: nameFormatter,
  updateRestaurantStatus: updateRestaurantStatus,
  getQueueInfo: getQueueInfo,
  getCustomerInfo: getCustomerInfo,
  getManagerInfo: getManagerInfo,
  removeFromQueue: removeFromQueue
};
