# movie-magic
SoftUni JS Back End Course Project

## Workshop - Express and Templaring

### Steps
 - [x] Initialize project
 - [x] Install Express and add server
 - [x] Setup debugging mode
 - [x] Add resources
 - [x] Install and setup Handlebars
 - [x] Setup static middleware
 - [x] Render home page
 - [x] Render about page
 - [x] Add layout
 - [x] Render 404 page not found
 ---
 ### Architecture and dynamic rendering
 - [x] Add home controller
 - [x] Add movie data layer
 - [x] Add movie service
 - [x] Render movies on home page dynamically
 - [x] Show screen if there are no movies on home page
 ---
 ### Create Movie
 - [x] Add movie controller
 - [x] Show create movie page
 - [x] Add routes
 - [x] Add Body Parser
 - [x] Create movie
  - [x] Add action
  - [x] Add service
  - [x] Add model method for creating movie
 - [x] Redirect after creation
 - [x] Add unique id for each movie
 ---
 ### Details Page
 - [x] Add navigation button for details page
 - [x] Add route with param for details page
 - [x] GetOne movie from service
 - [x] Find movie by id from model
 - [x] Render details page with dynamic data
 ---
 ### Search
 - [x] Show static serch page
 - [x] Render all movies
 - [x] Modify search form
 - [x] Filter movies
 - [x] Remember search words
 ---
### Bonuses
 - [x] Add dynamic title
 - [x] File persistance

## Workshop 2 - MongoDB Database

### Setup Database
 - [x] Install MongoDB
 - [x] Install Mongoose
 - [x] Connect to DB
 
 ### Refactor movies to use Mongoose
 - [x] Add movie model
  - [x] Create movie schema
  - [x] Create movie model
 - [x] Import file movies to DB
 - [X] Fix own propperty handlebars problem with lean method
 - [x] General fix for own property problem
 - [x] Refactor details
 - [x] Refactor create
 - [x] Refactor search

 ### Add Cast
 - [x] Add new resources
 - [x] Create cast controller
 - [x] Create cast page
 - [x] Add cast model
 - [x] Create cast service
 - [x] Create cast functionality

 ### Attach Cast to Movie (relation)
 - [x] Add attach cast button
 - [x] Add attach cast page
 - [x] Add dynamic data to cast page
 - [x] Show cast list in attach select
 - [x] Add relation between cast and movie
 - [x] Add attach cast functionality

 ### Show Cast (population)
 - [x] Get filtered movie casts
 - [x] Show casts on details
 - [x] Get movie cast using poulation

 ## Workshop 3 - Session and Authentication
 
 ### Initial Setup
 - [x] Add resources

 ### Registration
 - [x] Add new controller "authController"
 - [ ] Add registration page
 - [ ] Add User model
 - [ ] Add User service
 - [ ] Create User in DB
 - [ ] Add password hashing

 ### Login

 
 ### Bonuses
 - [x] Filter casts if they are already attached
 - [ ] Env variables
 - [ ] Name in movie
 - [ ] Add movie views to a folder