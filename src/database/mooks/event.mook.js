import { faker } from '@faker-js/faker';

const generateEvents = () => {
  return {
    id: faker.string.uuid(),
    title: faker.person.jobArea(),
    description: faker.lorem.sentences(),
    date: faker.date.weekday(),
    location: faker.location.timeZone(),
  };
};

export default generateEvents;
