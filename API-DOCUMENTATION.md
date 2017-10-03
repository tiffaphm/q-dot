# API Documentation

## Schema

Schema includes 3 tables shown below:

|Restaurants   |                                  |
|--------------|----------------------------------|
|field name    |field type                        |
|--------------|----------------------------------|
|id            |integer, auto increasing          |
|image         |string, url link                  |
|name          |string, restaurant name           |
|phone         |string, restaurant number         |
|queue_count   |integer, current queue count      |
|status        |string, current queue status      |
|createdAt     |string, restaurant creation date  |
|updatedAt     |string, restaurant updated date   |


|Queues        |                                  |
|--------------|----------------------------------|
|field name    |field type                        |
|--------------|----------------------------------|
|id            |integer, auto increasing          |
|position      |integer, queue position           |
|size          |integer, customer group size      |
|restaurantId  |integer, restaurant id            |
|customerId    |integer, customer id              |
|createdAt     |string, queue creation date       |
|updatedAt     |string, queue updated date        |


|Customers     |                                  |
|--------------|----------------------------------|
|field name    |field type                        |
|--------------|----------------------------------|
|id            |integer, auto increasing          |
|name          |string, restaurant name           |
|mobile        |string, customer mobile number    |
|email         |string, customer email address    |
|createdAt     |string, customer creation date    |
|updatedAt     |string, customer updated date     |


### /restaurants

GET request to '/restaurants' returns a list of all the restaurants in the database. The list contains restaurant objects with the restaurant's id, name, phone, image and current queue count. There is a timestamp for when the restaurant was created in the database and a timestamp for the last time it was updated.

Example:
```
request.get('https://q-dot.herokuapp.com/restaurants');

//response

[
    {
        "id": 1,
        "image": "../images/blank.png",
        "name": "Tempest",
        "phone": "(123) 456-7890",
        "queue_count": 0,
        "status": "Open",
        "createdAt": "2017-10-03T18:26:01.859Z",
        "updatedAt": "2017-10-03T18:26:01.859Z"
    },
    {
        "id": 2,
        "image": "../images/blank.png",
        "name": "Subway",
        "phone": "(123) 456-7990",
        "queue_count": 0,
        "status": "Open",
        "createdAt": "2017-10-03T18:26:01.942Z",
        "updatedAt": "2017-10-03T18:26:01.942Z"
    }
]

```
### /restaurants/[restaurantid]

GET request to '/restaurants/[restaurantid]' returns information of a selected restaurant in the database, including the restaurant's id, image, name, phone, current queue count, and current queue information.

Current queue information includes the position and the size of the group.

Accepts the restaurant id as part of the query string.

Example:
```
request.get('https://q-dot.herokuapp.com/restaurants/1');

//response:

{
    "id": 1,
    "image": "../images/blank.png",
    "name": "Tempest",
    "phone": "(123) 456-7890",
    "queue_count": 0,
    "status": "Open",
    "createdAt": "2017-10-03T18:26:01.859Z",
    "updatedAt": "2017-10-03T18:26:01.859Z",
    "queues": [
        {
            "id": 1,
            "position": 1,
            "size": 1,
            "createdAt": "2017-10-03T18:26:02.193Z",
            "updatedAt": "2017-10-03T18:26:02.193Z",
            "restaurantId": 1,
            "customerId": 1
        },
        {
            "id": 3,
            "position": 2,
            "size": 4,
            "createdAt": "2017-10-03T18:26:02.240Z",
            "updatedAt": "2017-10-03T18:26:02.240Z",
            "restaurantId": 1,
            "customerId": 3
        }
    ]
}

```

### /dummydata

POST request to '/dummydata' adds dummy data to the database if it does not already exist. 

Does not accept any arguments as part of query string or body.

Dummy data includes:

```
2 Restaurants:

[
    {name: 'Tempest', phone: '(123) 456-7890', image: '../images/blank.png', 'queue_count': 0, status: 'Open'},
    {name: 'Subway', phone: '(123) 456-7990', image: '../images/blank.png', 'queue_count': 0, status: 'Open'}
]

4 Customers:

[
    {name: 'Tiffany', mobile: '(234) 563-9762'},
    {name: 'Neha', mobile: '(786) 987-4567', email: 'nez@gmail.com'}, 
    {name: 'Eugene', mobile: '(975) 097-8967', email: 'eugene@gmail.com'}, 
    {name: 'Johnny', mobile: '(456) 730-5746'}
]

4 Queues:

[
    {customerId: 1, restaurantId: 1, position: 1, size: 1},
    {customerId: 2, restaurantId: 2, position: 1, size: 1},
    {customerId: 3, restaurantId: 1, position: 2, size: 4},
    {customerId: 4, restaurantId: 2, position: 2, size: 4}
]

```