// src/data/users.manager.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomBytes } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'users.json');

class UserManager {
  create(data) {
    const users = this.read();
    const newUser = { id: randomBytes(12).toString('hex'), ...data };
    users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return newUser;
  }

  read() {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  readOne(id) {
    const users = this.read();
    return users.find(user => user.id === id);
  }

  update(id, data) {
    const users = this.read();
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return null;
    }
    users[index] = { ...users[index], ...data };
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return users[index];
  }

  destroy(id) {
    const users = this.read();
    const newUsers = users.filter(user => user.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(newUsers, null, 2));
    return users.length !== newUsers.length;
  }
}

export default UserManager;