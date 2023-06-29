import mongoose from 'mongoose';

import { setup } from '../config/config.js';

async function connect() {
  try {
    const connection = await mongoose.connect(setup.uri);
    console.log('connection success!');
    return connection;
  } catch (error) {
    console.log(error);
  }
}

export default connect;
