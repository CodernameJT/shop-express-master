// src/routers/api/users.api.js
import express from 'express';
import UserManager from '../../data/users.manager.js'; // Ensure correct import
import isValidUserData from '../../middlewares/isValidUserData.mid.js';
import errorHandler from '../../middlewares/errorHandler.mid.js';

const router = express.Router();
const userManager = new UserManager(); // Create an instance of the class

// POST /api/users endpoint
router.post('/', isValidUserData, (req, res) => {
  try {
    const newUser = userManager.create(req.body);
    res.status(201).json({
      id: newUser.id,
      message: 'User successfully created'
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// GET /api/users endpoint
router.get('/', (req, res) => {
  try {
    const users = userManager.read();
    res.status(200).json({
      statusCode: 200,
      response: users
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// GET /api/users/:uid endpoint
router.get('/:uid', (req, res) => {
  try {
    const user = userManager.readOne(req.params.uid);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// PUT /api/users/:uid endpoint
router.put('/:uid', isValidUserData, (req, res) => {
  try {
    const updatedUser = userManager.update(req.params.uid, req.body);
    if (updatedUser) {
      res.status(200).json({
        statusCode: 200,
        response: updatedUser
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// DELETE /api/users/:uid endpoint
router.delete('/:uid', (req, res) => {
  try {
    const isDeleted = userManager.destroy(req.params.uid);
    if (isDeleted) {
      res.status(200).json({
        statusCode: 200,
        message: 'User successfully deleted'
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

export default router;