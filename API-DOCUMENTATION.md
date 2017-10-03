# API Documentation

## /restaurants

### /restaurants/[restaurantid]

1. accepts the restaurant id as part of the query string, and returns an object with the restaurant's id, image, name, phone, current queue count, and current queue information.

1. Current queue information includes the position and the size of the group.

Example:
```
request.get('https://q-dot.herokuapp.com/restaurants/1');

//response:

{
    "id": 1,
    "image": "../images/blank.png",
    "name": "Tempest",
    "phone": "1234567890",
    "queue_count": 0,
    "createdAt": "2017-10-03T02:32:50.975Z",
    "updatedAt": "2017-10-03T02:32:50.975Z",
    "queues": [
        {
            "id": 1,
            "position": 1,
            "size": 1,
            "createdAt": "2017-10-03T02:33:24.126Z",
            "updatedAt": "2017-10-03T02:33:24.126Z",
            "restaurantId": 1,
            "customerId": 1
        },
        {
            "id": 3,
            "position": 3,
            "size": 4,
            "createdAt": "2017-10-03T02:33:24.146Z",
            "updatedAt": "2017-10-03T02:33:24.146Z",
            "restaurantId": 1,
            "customerId": 3
        },
        {
            "id": 8,
            "position": 2,
            "size": 4,
            "createdAt": "2017-10-03T02:35:31.096Z",
            "updatedAt": "2017-10-03T02:35:31.096Z",
            "restaurantId": 1,
            "customerId": 3
        }
    ]
}

```