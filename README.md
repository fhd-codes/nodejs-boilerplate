# nodejs-boilerplate
This repo has the boilerplate code for user signup signin backend using node and express js

This Node.js backend project follows a specific file structure:

- The `server.js` file sets up the server connection.
- The `controllers` directory contains functionality files that handle actions when an endpoint is called.
- The `middleware` directory contains middleware functions like user authentication.
- The `models` directory defines the schemas and establishes the database connection in `index.js`.
- The `routes` directory specifies which function to call when a specific endpoint is hit.

This file structure organizes the project's components and separates concerns for easier development and maintenance of the Node.js backend.

## Project Structure

- `server.js`: Sets up the server connection.
- `controllers/`: Contains functionality files for endpoint actions.
- `middleware/`: Holds middleware functions like user authentication.
- `models/`: Defines schemas and establishes the database connection.
- `routes/`: Specifies endpoint handling functions.

By adhering to this file structure, the project maintains a modular and scalable architecture, making it easier to develop and maintain the Node.js backend.


Reference link: [Node.js Authentication with PostgreSQL, Sequelize, and Express.js](https://medium.com/@rachealkuranchie/node-js-authentication-with-postgresql-sequelize-and-express-js-20ae773da4c9).
