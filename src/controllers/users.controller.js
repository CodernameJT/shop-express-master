const UserManager = require('../data/users.manager');

// Example of use
const newUser = UserManager.create({ name: 'John Doe', email: 'john@example.com' });
console.log(newUser);