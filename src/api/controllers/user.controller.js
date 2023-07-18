import UserService from '../services/user.service.js';

const service = new UserService();

export const signup = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await service.signup(body);
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
    const user = await service.verifyToken(headers);
    req.sub = user.sub;
  } catch (error) {
    next(error);
  }
  next();
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
