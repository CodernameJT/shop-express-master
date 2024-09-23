const fs = require('fs');
const { randomBytes } = require('crypto');

const generateMockUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      id: randomBytes(12).toString('hex'),
      photo: '/images/default.png',
      email: `user${i + 1}@example.com`,
      password: 'password123',
      role: 0
    });
  }
  return users;
};

const mockUsers = generateMockUsers(40);
fs.writeFileSync('src/data/files/users.json', JSON.stringify(mockUsers, null, 2));