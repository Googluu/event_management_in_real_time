import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { unauthorized, notFound, badRequest } from '@hapi/boom';
import { isValidObjectId } from 'mongoose';

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
    // return User.findByIdAndUpdate(id, changes, { upsert: true, new: true });
    if (!isValidObjectId(id)) throw new Error('Invalid user ID');

    if (
      !changes ||
      (Object.keys(changes).length === 0 && changes.constructor === Object)
    ) {
      throw new Error('No valid changes provided');
    }

    const allowedFields = ['name', 'avatar'];
    const validChanges = Object.keys(changes).reduce((result, field) => {
      if (!allowedFields.includes(field)) {
        throw badRequest(`${field} is not allowed`);
      } else {
        result[field] = changes[field];
      }
      return result;
    }, {});

    return User.findByIdAndUpdate(id, validChanges, { new: true });
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
