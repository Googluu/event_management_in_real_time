import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { unauthorized, notFound } from '@hapi/boom';

import { User } from '../../database/entities/user.entity.js';
import { setup } from '../../config/config.js';

class UserService {
  async signup(data) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(data.password, salt);
    const newUser = new User({
      ...data,
      password: hash,
    });
    const response = await newUser.save();
    return response;
  }

  async updateInfoUser(id, changes) {
    return User.findByIdAndUpdate(id, changes, { upsert: true, new: true });
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw unauthorized();
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw unauthorized();
    const payload = {
      sub: user._id,
      role: user.role,
    };
    const token = jwt.sign(payload, setup.jwtKey, { expiresIn: '24hr' });
    return {
      user,
      token,
    };
  }

  async verifyToken(headers) {
    const token = headers.split('Bearer ')[1];
    if (!token) throw notFound('token not found');
    const user = jwt.verify(token, setup.jwtKey);
    if (!user) throw unauthorized();
    return user;
  }

  async getUser(userId) {
    const user = await User.findById(userId, '-password');
    if (!user) throw notFound('token not found');
    return user;
  }
}

export default UserService;
