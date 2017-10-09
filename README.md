<p align="center"><img src="/documentation/images/logo.png" height="50%" width="50%" ></p>

# q.

An exploration into full-stack web engineering and project management, based on a restaurant's queue management system.

q. is a restaurant queue management platform catered towards allowing customers to queue up for a restaurant digitally, so that customers do not have to travel to a restaurant to wait in line.

Customers are able to see their current position in line and total wait time, while restaurant managers have the ability to manage the restaurant's queue.

## Team

  - [Johnny Li](https://github.com/Pegaiur)
  - [Tiffany Pham](https://github.com/tiffaphm)
  - [Neha Chaudhary](https://github.com/nehacp)
  - [Eugene Soo](https://github.com/eugenesoo)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Getting Started

### Introduction
q. comes with a customer-facing page, a queue information page and a manager-facing page/

Manager facing page:
http://<server_url>/manager

Default login information:
username: johnny
password: hunter2

Currently, the manager page has been developed for a single restaurant.

Customer facing page:
http://<server_url>/customer

Queue information page:
http://<server_url>/customer/queueinfo

Visiting http://<server_url>/ redirects you to either /customer or /customer/queueinfo?queueId=[queueId], depending on whether a spot in queue has been reserved at a restaurant.

### Deployment
**How to deploy**
Currently, q. is currently hosted on [Heroku](https://www.heroku.com/) and [Linode](https://www.linode.com/).

The webserver and postgreSQL server is hosted on Heroku, while the session store is hosted on DigitalOcean.

#### Heroku Deployment
This section outlines the steps on how to deploy the webserver and postgreSQL server to [Heroku](https://www.heroku.com/).

#### DigitalOcean Deployment
This section outlines the steps on how to deploy the session store database to [Linode](https://www.linode.com/).

Linode provides a similar service to [DigitalOcean](https://www.digitalocean.com/), allowing you to deploy a linux server with a static IP address.

The session store for q. is currently configured to use a Redis Server, and the simplest way to deploy a Redis Server is to use a pre-made docker image.

##### Setup
1. Create and setup an Ubuntu-based linux server on Linode or DigitalOcean.
1. Install Docker using the repository.
- Refer to docker installations instruction for more information.
1. Pull the Redis docker image from dockerhub.
- Refer to the [official repository for redis](https://hub.docker.com/_/redis/) for more information.
1. Run the redis image with the following script:
`sudo docker run --name q-sessions -p 6379:6379 -d redis redis-server --appendonly yes`
This exposes port 6379 on the docker container to port 6379 of your linode/digitalocean server, so that it is possible to access the redis server via http://<linode_ip_address>:6379/
1. add the following config variables in Heroku:
- REDISURL: points to the linode ip address.
- REDISPORT: point this to 6379, or whichever port you exposed the docker container port to.
- REDISSECRET: set a random string here to generate session id hashes with.

#### Initialisation
**NPM Scripts**

|script name   |action                            |
|--------------|----------------------------------|
|start         |starts server with nodemon        |
|client        |starts webpack to bundle js files |

To get started, run

```
npm install
npm run client
npm start
```

### File Structure


## Requirements

- Node 6.4.x
- Redis 2.6.x
- Postgresql 6.4.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Roadmap

View the project roadmap [here](LINK_TO_DOC)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
