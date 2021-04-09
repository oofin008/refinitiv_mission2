import express, { Application, Request, Response, NextFunction, Errback} from 'express';
import index from '../app/index';
const app: Application = express();

// Set headers
app.use( (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Expose-Headers', 'x-suggested-filename');
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Logger
app.use( (req: Request, res: Response, next: NextFunction): void => {
  console.log('== request from ==', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  next();
});

// Init route
index(app);

app.use( (req: Request, res: Response, next: NextFunction): void => {
  res.status(404).json({
    success: false,
    message: "path not found"
  });
});

app.use((error: Errback, req: Request, res: Response, next: NextFunction): void => {
  if(!error) {
    next();
  } else {
    res.status(500).json({
      success: false,
      message: "Internal error, something went wrong"
    });
  }
});

export default app;
