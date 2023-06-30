import UserService from '../services/user.service.js';

class UserController {
  constructor() {
    this.service = new UserService();
  }

  create(req, res) {
    try {
      const body = req.body;
      const newUser = this.service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  findAll(_, res) {
    try {
      const user = this.service.find();
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  findOne(req, res) {
    try {
      const { id } = req.params;
      const user = this.service.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  update(req, res) {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = this.service.update(id, body);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      const exUser = this.service.delete(id);
      res.status(204).json(exUser);
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserController;
