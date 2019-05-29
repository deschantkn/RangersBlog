import jwt from 'jsonwebtoken';
import { hashSync, genSaltSync } from 'bcrypt';
import bcrypt from 'bcrypt';
import models from '../models';


const { User } = models;

export default {
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
  signup: async (req, res) => {
    try {
      const { names, email, password } = req.body;

      const salt = await genSaltSync(parseFloat(process.env.BCRYPT_HASH_ROUNDS) || 10);
      const hashPassword = await hashSync(password, salt);
      const user = await models.User.create({
        names,
        email,
        password: hashPassword,
      });

      res.status(201).json({
        message: 'Account successfully created',
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } catch (error) {
      res.status(Error).json({
        message: 'Sorry, this is not working properly.',
      });
    }
  },

  
};
