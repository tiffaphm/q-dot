# API Documentation

## Schema

Schema includes 3 tables shown below:

**Restaurants Table**

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


**Queues Table**

|field name    |field type                        |
|--------------|----------------------------------|
|id            |integer, auto increasing          |
|position      |integer, queue position           |
|size          |integer, customer group size      |
|restaurantId  |integer, restaurant id            |
|customerId    |integer, customer id              |
|createdAt     |string, queue creation date       |
|updatedAt     |string, queue updated date        |


**Customers Table**

|field name    |field type                        |
|--------------|----------------------------------|
|id            |integer, auto increasing          |
|name          |string, restaurant name           |
|mobile        |string, customer mobile number    |
|email         |string, customer email address    |
|createdAt     |string, customer creation date    |
|updatedAt     |string, customer updated date     |


## /restaurants

**Return a list of all the restaurants in the database**

GET request to '/restaurants' returns a list of all the restaurants in the database. The list contains restaurant objects with the restaurant's id, name, phone, image and current queue count. There is a timestamp for when the restaurant was created in the database and a timestamp for the last time it was updated.

Example:

```
request.get('https://q-dot.herokuapp.com/restaurants');

//response

[
    {
        "id": 1,                          
        //returns an unique integer
        "image": "../images/blank.png",   
        //returns a string, url for the restaurant image
        "name": "Tempest",                
        //returns a string, name of restaurant
        "phone": "(123) 456-7890",        
        //returns a string, phone number of restaurant
        "queue_count": 0,                 
        //returns an integer, current number of people in queue
        "status": "Open",                 
        //returns a string, either "Open" or "Close", reflecting 
        "createdAt": "2017-10-03T18:26:01.859Z",
        //returns a string, showing date of when restaurant info was created in db
        "updatedAt": "2017-10-03T18:26:01.859Z"
        //returns a string, showing date of when restaurant info was updated in db
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

### /restaurants?restaurantId=[restaurantId]

**Returns information of a selected restaurant in database, including detailed queue information**

GET request to '/restaurants?restaurantId=[restaurantId]' returns information of a selected restaurant in the database, including the restaurant's id, image, name, phone, current queue count, and current queue information.

Current queue information includes the position and the size of the group.

Accepts the restaurant id as part of the query string.

Example:

```
request.get('https://q-dot.herokuapp.com/restaurants?restaurantId=1');

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

### /restaurants?restaurantId=[restaurantId]&status=[status]

**To update status of the restaurant's queue**

PATCH request to /restaurants will update the status of the restaurant that indicates if it is accepting more customers to add to queue. It should always be either 'Open' or 'Closed'.

Example:

```
request.patch('https://q-dot.herokuapp.com/restaurants?restaurantId=1&status=Open');

//response

Successful Request:
200 - "Status for restaurant with id [restaurantId] is now [status]"

Failed Request:
400 - 'Bad Request' (if the parameters are incorrect)
418 - 'Update for restaurant status failed' (Unknown error)

```

## /queues

**To add customer to a queue of a restaurant**

POST request to '/queues' will add a customer to the queue of a restaurant. Expected data in request is a JSON object including the name, mobile, email (optional), size and restaurantId. 

If the restaurant is open, the response is an object that includes the customer name, mobile, email (if provided), size, position and queueId. If the restaurant is closed, the response will be a string 'Restaurant has closed the queue.'

Example:

```

requestData = {
    "name": "John", 
    "mobile": "1234550284",
    "email": "test@gmail.com",
    "size": 2,
    "restaurantId": 4 
}

request.post('https://q-dot.herokuapp.com/queues', requestData);

//response

Successful Response:


200 - {
    "name": "John",
    "mobile": "1234550284",
    "email": "test@gmail.com",
    "queueId": 6,
    "size": 2,
    "position": 3
}

200 - 'Restaurant has closed the queue' (if restaurant closed the queue in the interim time)


Failed Response:
400 - 'Bad Request' (if the parameters are incorrect)
418 - 'Request Failed' (Unknown error)

```

### /queues?customerId=[customerId]

**Returns detailed queue information of a selected customer in database, including customer information**

GET request to '/queues?customerId=[customerId]' will return detailed queue information of a selected customer, including his/her information.

Accepts the customer id as part of the query string.

Example:

```
request.get('https://q-dot.herokuapp.com/queues?customerId=1');

//response

Successful Request:

{
    "customer": {
        "id": 3,
        //returns an unique integer, represents customer in database
        "name": "Eugene",
        //returns a string, represents name of customer
        "mobile": "(975) 097-8967",
        //returns a string, represents mobile number of customer
        "email": "eugene@gmail.com",
        //returns a string, represents email address of customer
        "createdAt": "2017-10-03T19:01:10.724Z",
        //returns a date string, represents date that customer info was created in database
        "updatedAt": "2017-10-03T19:01:10.724Z"
        //returns a date string, represents date that customer info was update in database
    },
    "position": 2,
    //returns an integer, represents the queue number that was given to the customer 
    "size": 4,
    //returns an integer, represents the group size of the customer's reservation
    "groups_in_front_count": 1,
    //returns an integer, represents the number of customers in front of this customer
    "groups_in_front_details": [
        {
            "id": 1,
            "position": 1,
            "size": 1,
            "createdAt": "2017-10-03T19:01:10.743Z",
            "updatedAt": "2017-10-03T19:01:10.743Z",
            "restaurantId": 1,
            "customerId": 1
        }
    ]
    //returns an array, represents details of all the customers in front of this customer
}

Failed Request:
400 - 'Bad Request' (if the parameters are incorrect)
418 - 'Unknown Error - Check customerId' (Unknown error)

```

## /dummydata

**To insert dummy data into database**

POST request to '/dummydata' adds dummy data to the database if it does not already exist. 

Does not accept any arguments as part of query string or body.

Dummy data includes:

```
request.post('https://q-dot.herokuapp.com/dummydata');

3 Restaurants:

[
    {name: 'Tempest', phone: '(123) 456-7890', image: '../images/tempest.png', 'queue_count': 0, status: 'Open'},
    {name: 'Subway', phone: '(123) 456-7990', image: '../images/subway.png', 'queue_count': 0, status: 
    'Open'},
    {name: 'Chipotle', phone: '(132) 456-7990', image: '../images/chipotle.png', 'queue_count': 1, status: 'Closed'}
]

4 Customers:

[
    {name: 'tiffany', mobile: '2345639762'},
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
