# MIRotterdam
Project C

Klas: INF2B

Team:
* Nikola Saratlija (1005923)
* Bram Vermeer (1009906)
* Parwesh Bhaggan (1005210)
* Yassine Yaagoubi (0962390)
* Salar Ali (1005210)

## Environment currently hosted on:
`https://mi-rotterdam.herokuapp.com/`

# Install Instructions

## 1. Install all dependencies
    npm install

## 2. Database Setup
1. Open phpmyadmin and create a new blank database called mirotterdam
2. Find the .sql file in the folder `/database`, called `mirotterdam.sql` and import it in the new database
3. Create a new file called `.env` in root directory of this project
4. Copy the contents from `.env.example` to `.env` and enter your own database credentials, if needed. 

## 3. Run development server @ 127.0.0.1:3000/
    npm run dev

# Routes

## Index
`'/'`

## Design Maker
`'/ontwerpomgeving'`

## Admin
`'/admin`

`'/admin/dashboard`

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
