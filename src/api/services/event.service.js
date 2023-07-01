import { faker } from '@faker-js/faker';

import generateEvents from '../../database/mooks/event.mook.js';

class EventService {
  constructor() {
    this.events = [];
    this.generate();
  }

  generate() {
    let limit = 10;
    for (let i = 0; i < limit; i++) {
      this.events.push(generateEvents());
    }
  }

  create(data) {
    const newEvent = {
      id: faker.string.uuid(),
      ...data,
    };
    return this.events.push(newEvent);
  }

  find() {
    return this.events;
  }

  findOne(id) {
    const event = this.events.find((item) => item.id === id);
    return event;
  }

  update(id, change) {
    const index = this.events.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error(`Cannot find event`);
    }
    const event = this.events[index];
    this.events[index] = {
      ...event,
      ...change,
    };
    return this.events[index];
  }

  delete(id) {
    const index = this.events.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error(`Cannot find event`);
    }
    this.events.splice(index, 1);
  }
}

export default EventService;
