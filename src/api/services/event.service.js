import Event from '../../database/entities/event.entity.js';
class EventService {
  create(dto) {
    const newEvent = new Event({
      ...dto,
      creator: dto.userId,
    });
    return newEvent.save();
  }

  find() {
    return Event.find();
  }

  findOne(id) {
    return Event.findById(id).populate('creator');
  }

  update(id, changes) {
    return Event.findByIdAndUpdate(id, changes, { upsert: true, new: true });
  }

  delete(id) {
    return Event.findByIdAndDelete(id);
  }
}

export default EventService;
