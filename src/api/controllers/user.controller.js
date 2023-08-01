import { validateHandler } from '../../middleware/validator.handler.js';
import { createUser, updateUser, userId } from '../dtos/user.dto.js';
import UserService from '../services/user.service.js';

const service = new UserService();

export const signup = async (req, res, next) => {
  try {
    const body = req.body;

    // Validar los datos recibidos usando el DTO de registro/creacion
    validateHandler(createUser, 'body');

    const user = await service.signup(body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateInfoUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    validateHandler(userId, 'params');
    validateHandler(updateUser, 'body');

    const user = await service.updateInfoUser(id, body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const verifyToken = async (req, res, next) => {
  try {
    const headers = req.headers['authorization'];
    console.log(headers);
    const user = await service.verifyToken(headers);
    req.sub = user.sub;
    next();
  } catch (error) {
    next(error);
  }
  // next();
};

export const getUser = async (req, res, next) => {
  try {
    const userId = req.sub;
    console.log(userId);
    const user = await service.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
