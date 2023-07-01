import EventService from '../services/event.service.js';
const eventService = new EventService();

class EventController {
  // constructor() {
  //   this.eventService = new EventService();
  // }

  create(req, res) {
    try {
      const body = req.body;
      const newEvent = eventService.create(body);
      res.status(201).json(newEvent);
    } catch (error) {
      console.log(error);
    }
  }

  find(_, res) {
    try {
      const events = eventService.find();
      res.status(200).json(events);
    } catch (error) {
      console.log(error);
    }
  }

  findOne(req, res) {
    try {
      const { id } = req.params;
      const event = eventService.findOne(id);
      res.status(200).json(event);
    } catch (error) {
      console.log(error);
    }
  }

  update(req, res) {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateEvent = eventService.update(id, body);
      res.status(200).json(updateEvent);
    } catch (error) {
      console.log(error);
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      const removeEvent = eventService.delete(id);
      res.status(200).json(removeEvent);
    } catch (error) {
      console.log(error);
    }
  }
}

export default EventController;
