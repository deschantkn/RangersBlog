import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models';

const { User } = models;

export default {
  signup: () => {},
  signin: (req, res) => {
    // Look up user in db
    User.findByEmail(req.body.email).then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'User does not exist' });
      }

      // Compare password
      const isPasswordValid = bcrypt.compareSync(req.body.password, user.dataValues.password);
      if (isPasswordValid) {
        // create token
        const token = jwt.sign(
          { id: user.dataValues.id },
          process.env.SECRET,
          { expiresIn: 86400 },
        );
        return res.status(200).json({ token });
      }

      return res.status(401).json({ message: 'Password is invalid' });
    });
  },
};
