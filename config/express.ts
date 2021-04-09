import express, { Application, Request, Response, NextFunction} from 'express';
import index from '../app/index';
const app: Application = express();

// Set headers
app.use( (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Expose-Headers', 'x-suggested-filename');
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Logger
app.use( (req: Request, res: Response, next: NextFunction) => {
  console.log('== request from ==', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  next();
});

// Init route
index(app);

export default app;
