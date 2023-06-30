import { faker } from '@faker-js/faker';

const generateUsers = () => {
  return {
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    avatar: faker.image.avatar(),
  };
};

export default generateUsers;
