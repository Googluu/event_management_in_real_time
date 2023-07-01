import UserService from '../services/user.service.js';

const service = new UserService();
class UserController {
  // constructor() {
  //   this.service = new UserService();
  // }

  create(req, res) {
    try {
      const body = req.body;
      const newUser = service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  async find(_, res) {
    try {
      const users = await service.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }

  findOne(req, res) {
    try {
      const { id } = req.params;
      const user = service.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  update(req, res) {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = service.update(id, body);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      const exUser = service.delete(id);
      res.status(204).json(exUser);
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserController;
