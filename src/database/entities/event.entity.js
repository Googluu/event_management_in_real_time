import { Schema, model } from 'mongoose';

import User from './user.entity.js';

const eventSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: async function (userId) {
        const user = await User.findById(userId);
        return user.role === 'admin' || user.role === 'organizador';
      },
      message:
        'El creador del evento debe tener el rol de admin o organizador.',
    },
  },
  participants: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Event = model('Event', eventSchema);

export default Event;
