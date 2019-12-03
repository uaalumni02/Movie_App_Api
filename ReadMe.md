# Movie App Api 

## A Document Management API
Movie Data System that provides an interface for users to create, update, delete and read movie data. It uses JWT as its authentication mechanism.


# Technologies Used

### JavaScript (ES6)
1. Node.js
2. Express
3. Mongoose
4. MongoDb
5. Mocha

# API Documentation
1. Clone this repository from a terminal git clone https://github.com/uaalumni02/Movie_App_Api.git

2. Move into the project directory cd movie_app_api

3. Install project dependencies npm install

4. reqires .env with mongo_url and jwt_key

5. Create monogo database and establish connection

6. Start the express server npm run start:dev

7. Run test npm run test

# API Documentation 

### The API has routes, each dedicated to a single task that uses HTTP response codes to indicate request success or errors.

## Authentication

### Users are assigned a token when signup or signin. This token is then used for subsequent HTTP requests to the API for authentication and should be sent as one of the header values.

## Below are the API endpoints and their functions

| EndPoint | Functionality |
| ----------- | ----------- |
| POST /api/user/login | Logs a user in.|
|   GET /api/user/ |  Displays all users. |
|  DELETE /api/user/ |  Delete user |
|GET /api/user/| displays all users|
|POST /api/movie/|Creates a new movie. |
|DELETE /api/movie|Delete movie |
|GET /api/movie| Gets all movies assigned to logged in user|
|PATCH /api/movie| Update movie attributes.|


## Authentication Information 
```
{
  "usermame": "movie",
  "password": "password",
}
```
```
{
  "usermame": "meco",
  "password": "password",
}
```

### server
localhost:3000

### App Deploy
https://movie-movie-app.herokuapp.com/