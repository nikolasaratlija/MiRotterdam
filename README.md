# MIRotterdam
PROJECT C

Klas: INF2B

Team:
* Nikola Saratlija (1005923)
* Jan Roozemond (0980888)
* Bram Vermeer (1009906)
* Parwesh Bhaggan (1005210)
* Yassine Yaagoubi (0962390)
* Salar Ali (1005210)

## Environment currently hosted on:
`https://mi-rotterdam.herokuapp.com/`

## Install all dependencies
    npm start

## Run dev environment @ 127.0.0.1:8000/
    npm run dev

# Routes

## Index
`'/'`

## Design Maker
`'/ontwerpomgeving'`

# REST API
An API for communicating with the MySQL database

## Locations

### Get all locations:

`GET /api/locations/`


### Get location by ID:

`GET /api/locations/:id`


### Get image of location by ID

`GET /api/locations/:id/image`


### Create new location

`POST /api/locations/`


### Update location by ID

`PUT /api/locations/:id`


### Remove location by ID

`DELETE /api/locations/:id`

## Elements

### Get array of element image names

`GET /api/elements/`
