 

## Description
 It is a web programming project made with `Node.js` on the server side and plain `HTML`, `CSS` and `JS` on the client side.

The application uses `socket.io` for real time chat communication. All data is saved in a `MongoDB` database in the cloud (using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and `mongoose` for database access).

**App features include**:
* User account management system with registration and modification of data on request
* Password encryption with `bcrypt`
* Error handling with client-side message boxes
* Session management for detecting invalid access to resources
* Real-time chat with customizable username colors
* User statistics like the number of messages sent
* Real-time collaborative drawing board
* Support for touch screen drawing
* Ability to create/delete rooms and set a maximum amount of members
* Ability to search rooms by name

## How to run locally
1. Install `Node.js`
2. `$ git clone` the repository
3. Run `$ npm install` in the main directory
4. Create a [MongoDB Cloud](https://www.mongodb.com/cloud/atlas) account and set-up a database
    * Alternatively, install `MongoDB` locally
5. Get the connection URI for the database
6. Run `$ echo 'DB_URI=<YOUR_URI>' > .env` in the main directory, where `<YOUR_URI>` is the connection URI for your database
7. Run `$ node app.js` in the main directory to start the server  
8. Visit `http://localhost:7070` in your browser
 
