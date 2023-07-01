import { faker } from '@faker-js/faker';

import generateUsers from '../../database/mooks/user.mook.js';

// const faker = new Faker();
class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    let limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push(generateUsers());
    }
  }

  create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    return this.users;
  }

  findOne(id) {
    const user = this.users.find((item) => item.id === id);
    return user;
  }

  update(id, change) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) throw new Error(`User ${id} not found`);
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...change,
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) throw new Error(`User ${id} already exists`);
    this.users.splice(index, 1);
  }
}

export default UserService;
