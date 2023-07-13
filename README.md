# nodejs-boilerplate
This repo has the boilerplate code for user signup signin backend using node and express js

## Project Structure
This file structure organizes the project's components and separates concerns for easier development and maintenance of the Node.js backend.
- `server.js`: Sets up the server connection.
- `controllers/`: Contains functionality files for endpoint actions.
- `middleware/`: Holds middleware functions like user authentication.
- `models/`: Defines schemas and establishes the database connection.
- `routes/`: Specifies endpoint handling functions.

By adhering to this file structure, the project maintains a modular and scalable architecture, making it easier to develop and maintain the Node.js backend.


Reference link: [Node.js Authentication with PostgreSQL, Sequelize, and Express.js](https://medium.com/@rachealkuranchie/node-js-authentication-with-postgresql-sequelize-and-express-js-20ae773da4c9).


## Steps to follow while working with the backend

- Make a new schema in `./models` directory
- Connect to the schema in `./models/index.js` file
- Make the CRUD for that model in `./controllers` directory
- Define the routes and map it to the controller file in the `./routes` directory
- If there are some middlewares needed, define those middlewares in `./middlewares` directory
- In the end, add the app.use() in `./server.js` file
