import express, { Application, Request, Response, NextFunction} from 'express';
import index from './app/index';
const app: Application = express();

// Set headers
app.use( (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, access_token'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
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

// Get port and start server
const port: string|number = process.env.PORT || 3000;
app.listen(port, ():void => console.log(`App listen on PORT: ${port}`));
