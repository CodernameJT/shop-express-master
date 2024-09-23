# Shop Express

Shop Express is a Node.js application built with Express.js to manage products and users. The application provides a RESTful API for creating, reading, updating, and deleting products and users. It also includes middleware for validation and error handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Products](#products)
  - [Users](#users)
- [Middleware](#middleware)
- [File Structure](#file-structure)
- [Generating Mock Data](#generating-mock-data)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/CodernameJT/backend1-1
   cd shop-express

2. Install dependencies
    npm install

3. Run the server
    npm start

Here's a detailed `README.md` for your project:

```markdown
# Shop Express

Shop Express is a Node.js application built with Express.js to manage products and users. The application provides a RESTful API for creating, reading, updating, and deleting products and users. It also includes middleware for validation and error handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Products](#products)
  - [Users](#users)
- [Middleware](#middleware)
- [File Structure](#file-structure)
- [Generating Mock Data](#generating-mock-data)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/shop-express.git
   cd shop-express
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the server:
   ```sh
   npm start
   ```

## Usage

The server will start on port 3000 by default. You can access the API at `http://localhost:3000/api`.

## API Endpoints

### Products

- **POST /api/products**
  - Create a new product.
  - Request body should include `title` (string) and `price` (number).
  - Response: `{ id: <new_product_id>, message: 'Product successfully created' }`

- **GET /api/products/:pid**
  - Retrieve a product by its ID.
  - Response: The product object if found, otherwise a 404 error.

- **PUT /api/products/:pid**
  - Update a product by its ID.
  - Request body should include the fields to update.
  - Response: The updated product object if found, otherwise a 404 error.

- **DELETE /api/products/:pid**
  - Delete a product by its ID.
  - Response: `{ statusCode: 200, message: 'Product successfully deleted' }` if found, otherwise a 404 error.

### Users

- **POST /api/users**
  - Create a new user.
  - Request body should include `name` (string) and `email` (string).
  - Response: `{ id: <new_user_id>, message: 'User successfully created' }`

- **GET /api/users/:uid**
  - Retrieve a user by their ID.
  - Response: The user object if found, otherwise a 404 error.

- **PUT /api/users/:uid**
  - Update a user by their ID.
  - Request body should include the fields to update.
  - Response: The updated user object if found, otherwise a 404 error.

- **DELETE /api/users/:uid**
  - Delete a user by their ID.
  - Response: `{ statusCode: 200, message: 'User successfully deleted' }` if found, otherwise a 404 error.

## Middleware

- **isValidData.mid.js**
  - Validates the request body for product creation and updates.

- **isValidUserData.mid.js**
  - Validates the request body for user creation and updates.

- **errorHandler.mid.js**
  - Handles errors and sends appropriate responses to the client.

- **pathHandler.mid.js**
  - Handles invalid paths and sends a 404 response.

## Generating Mock Data

To generate mock data for products and users, run the following scripts:

- **Generate Mock Products**
  ```sh
  node generateMockProducts.js
  ```

- **Generate Mock Users**
  ```sh
  node generateMockUsers.js
  ```

These scripts will create `products.json` and [`users.json`] files in the files directory with mock data.

## License

This project is licensed under the MIT License.
```

This `README.md` provides a comprehensive overview of your project, including installation instructions, usage details, API endpoints, middleware descriptions, file structure, and instructions for generating mock data.