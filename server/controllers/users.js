import models from '../models';

const { User } = models;

export default {
  follow: (req, res) => {
    const { id: currentUser } = req.userData;

    // Find user to follow
    User.findByPk(req.params.userId).then((userToFollow) => {
      if (!userToFollow) {
        return res.status(404).json({ status: 404, message: 'User to follow not found' });
      }

      const { dataValues } = userToFollow;

      // add current user to userToFollow's followers array
      dataValues.followers.push(currentUser);

      // update data
      User.update(
        { followers: dataValues.followers },
        { where: { id: req.params.userId } },
      ).then((savedUser) => {
        // return response
        return res.status(200).json({ message: `You are now following user with id: ${savedUser}` });
      });
    });
  },
  unfollow: (req, res) => {
    const { id: currentUser } = req.userData;

    // Find user to follow
    User.findByPk(req.params.userId).then((userToUnfollow) => {
      if (!userToUnfollow) {
        return res.status(404).json({ message: 'User to unfollow not found' });
      }

      const { dataValues } = userToUnfollow;

      // remove current user to userToFollow's followers array
      dataValues.followers.splice(dataValues.followers.indexOf(currentUser), 1);

      // update data
      User.update(
        { followers: dataValues.followers },
        { where: { id: req.params.userId } },
      ).then((savedUser) => {
        // return response
        return res.status(200).json({ message: `You have unfollowed user with id: ${savedUser}` });
      });
    });
  },
};
