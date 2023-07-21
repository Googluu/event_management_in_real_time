import { User } from '../database/entities/user.entity.js';

export const checkEmailExists = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: 'El email ya está en uso' });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Hubo un error en el servidor' });
  }
};
