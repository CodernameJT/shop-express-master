import { Router } from "express";
import UserManager from '../../data/users.manager';
import isValidUserData from '../../middlewares/IsValidUserData.mid';
import errorHandler from '../../middlewares/errorHandler.mid';

const usersApiRouter = Router()

// POST /api/users endpoint
usersApiRouter.post('/', isValidUserData, (req, res) => {
  try {
	const newUser = UserManager.create(req.body);
	res.status(201).json({
	  id: newUser.id,
	  message: 'User successfully created'
	});
  } catch (err) {
	errorHandler(err, req, res);
  }
});

// GET /api/users endpoint
usersApiRouter.get('/', (req, res) => {
  try {
    const users = UserManager.read();
    res.status(200).json({
      statusCode: 200,
      response: users
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// GET /api/users/:uid endpoint
usersApiRouter.get('/:uid', (req, res) => {
  try {
    const user = UserManager.readOne(req.params.uid);
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
usersApiRouter.put('/:uid', isValidUserData, (req, res) => {
  try {
    const updatedUser = UserManager.update(req.params.uid, req.body);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// DELETE /api/users/:uid endpoint
usersApiRouter.delete('/:uid', (req, res) => {
  try {
    const deletedUser = UserManager.delete(req.params.uid);
    if (deletedUser) {
      res.status(200).json({ message: 'User successfully deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});



//definir las rutas correspondientes y luego exportar

export default usersApiRouter