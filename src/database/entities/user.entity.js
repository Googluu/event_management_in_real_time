import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: 'Email already used!',
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    trim: true,
    enum: ['admin', 'organizador', 'participante'],
    default: 'participante',
  },
});

const User = model('User', userSchema);

export default User;
