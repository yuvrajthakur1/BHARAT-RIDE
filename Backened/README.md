# Captain Routes Documentation

This document provides an overview of the routes and important information for the Captain model in the backend of the Uber Clone project. This will help frontend developers understand how to interact with the Captain-related endpoints.

## Table of Contents
- [Routes](#routes)
  - [Register Captain](#register-captain)
  - [Login Captain](#login-captain)
  - [Get Captain Profile](#get-captain-profile)
  - [Logout Captain](#logout-captain)
- [Models](#models)
  - [Captain Model](#captain-model)
- [Controllers](#controllers)
  - [Captain Controller](#captain-controller)
- [Middlewares](#middlewares)
  - [Auth Middleware](#auth-middleware)
- [Services](#services)
  - [Captain Service](#captain-service)

## Routes

### Register Captain
- **Endpoint:** `/register`
- **Method:** `POST`
- **Description:** Registers a new captain.
- **Validation:**
  - `email`: Must be a valid email.
  - `fullname.firstname`: Minimum length of 3 characters.
  - `password`: Minimum length of 6 characters.
  - `vehicle.color`: Minimum length of 3 characters.
  - `vehicle.plate`: Minimum length of 3 characters.
  - `vehicle.capacity`: Minimum length of 1 character.
  - `vehicle.vehicleType`: Must be one of `['car', 'motorcycle', 'auto']`.
- **Controller Method:** `captainController.registerCaptain`

### Login Captain
- **Endpoint:** `/login`
- **Method:** `POST`
- **Description:** Logs in an existing captain.
- **Validation:**
  - `email`: Must be a valid email.
  - `password`: Minimum length of 6 characters.
- **Controller Method:** `captainController.loginCaptain`

### Get Captain Profile
- **Endpoint:** `/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile of the logged-in captain.
- **Middleware:** `authMiddleware.authCaptain`
- **Controller Method:** `captainController.getCaptainProfile`

### Logout Captain
- **Endpoint:** `/logout`
- **Method:** `POST`
- **Description:** Logs out the current captain.
- **Middleware:** `authMiddleware.authCaptain`
- **Controller Method:** `captainController.logoutCaptain`

## Models

### Captain Model
- **Schema:**
  - `fullname`
    - `firstname`: String, required, minimum length of 3 characters.
    - `lastname`: String, minimum length of 3 characters.
  - `email`: String, required, unique, lowercase, minimum length of 5 characters.
  - `password`: String, required, select false.
  - `socketId`: String.
  - `status`: String, enum `['active', 'inactive']`, default `inactive`.
  - `vehicle`
    - `color`: String, required, minimum length of 3 characters.
    - `plate`: String, required, minimum length of 3 characters.
    - `capacity`: Number, required, minimum value of 1.
    - `vehicleType`: String, required, enum `['car', 'motorcycle', 'auto']`.
  - `location`
    - `lat`: Number.
    - `lng`: Number.
- **Methods:**
  - `generateAuthToken`: Generates a JWT token.
  - `comparePassword`: Compares the provided password with the hashed password.
- **Statics:**
  - `hashPassword`: Hashes the provided password.

## Controllers

### Captain Controller
- **Methods:**
  - `registerCaptain`: Handles the registration of a new captain.
  - `loginCaptain`: Handles the login of an existing captain.
  - `getCaptainProfile`: Retrieves the profile of the logged-in captain.
  - `logoutCaptain`: Logs out the current captain.

## Middlewares

### Auth Middleware
- **Methods:**
  - `authUser`: Authenticates a user.
  - `authCaptain`: Authenticates a captain.

## Services

### Captain Service
- **Methods:**
  - `createCaptain`: Creates a new captain in the database.

This documentation should provide a clear understanding of the Captain-related routes and their functionalities for the frontend developers.




## User Routes Documentation

This document provides an overview of the routes and important information for the User model in the backend of the Uber Clone project. This will help frontend developers understand how to interact with the User-related endpoints.

## Table of Contents
- [Routes](#routes)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Get User Profile](#get-user-profile)
  - [Logout User](#logout-user)
- [Models](#models)
  - [User Model](#user-model)
- [Controllers](#controllers)
  - [User Controller](#user-controller)
- [Middlewares](#middlewares)
  - [Auth Middleware](#auth-middleware)
- [Services](#services)
  - [User Service](#user-service)

## Routes

### Register User
- **Endpoint:** `/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Validation:**
  - `email`: Must be a valid email.
  - `fullname.firstname`: Minimum length of 3 characters.
  - `password`: Minimum length of 6 characters.
- **Controller Method:** `userController.registerUser`

### Login User
- **Endpoint:** `/login`
- **Method:** `POST`
- **Description:** Logs in an existing user.
- **Validation:**
  - `email`: Must be a valid email.
  - `password`: Minimum length of 6 characters.
- **Controller Method:** `userController.loginUser`

### Get User Profile
- **Endpoint:** `/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile of the logged-in user.
- **Middleware:** `authMiddleware.authUser`
- **Controller Method:** `userController.getUserProfile`

### Logout User
- **Endpoint:** `/logout`
- **Method:** `POST`
- **Description:** Logs out the current user.
- **Middleware:** `authMiddleware.authUser`
- **Controller Method:** `userController.logoutUser`

## Models

### User Model
- **Schema:**
  - `fullname`
    - `firstname`: String, required, minimum length of 3 characters.
    - `lastname`: String, minimum length of 3 characters.
  - `email`: String, required, unique, lowercase, minimum length of 5 characters.
  - `password`: String, required, select false.
  - `status`: String, enum `['active', 'inactive']`, default `inactive`.
  - `location`
    - `lat`: Number.
    - `lng`: Number.
- **Methods:**
  - `generateAuthToken`: Generates a JWT token.
  - `comparePassword`: Compares the provided password with the hashed password.
- **Statics:**
  - `hashPassword`: Hashes the provided password.

## Controllers

### User Controller
- **Methods:**
  - `registerUser`: Handles the registration of a new user.
  - `loginUser`: Handles the login of an existing user.
  - `getUserProfile`: Retrieves the profile of the logged-in user.
  - `logoutUser`: Logs out the current user.

## Middlewares

### Auth Middleware
- **Methods:**
  - `authUser`: Authenticates a user.
  - `authCaptain`: Authenticates a captain.

## Services

### User Service
- **Methods:**
  - `createUser`: Creates a new user in the database.

This documentation should provide a clear understanding of the User-related routes and their functionalities for the frontend developers.

