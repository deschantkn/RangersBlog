import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);
    req.userData = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      error: 'Authentication failed, please check your credentials',
    });
  }
};
