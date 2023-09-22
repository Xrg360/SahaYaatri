import { auth } from './firebaseConfig';

// Middleware to check if the user is authenticated
export const isAuthenticated = (req, res, next) => {
  const user = auth.currentUser;

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Middleware to check if the user has a specific role
export const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
};
