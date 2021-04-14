import express, { Application } from 'express';
import {headerInit, logger, errorHandle, pathNotFound} from './app/server';
import { appRoute } from './app';

const app: Application = express();

headerInit(app);
logger(app);
appRoute(app);
errorHandle(app);
pathNotFound(app);

// Get port and start server
const port: string|number = process.env.PORT || 3000;
app
  .listen(port, ():void => console.log(`App listen on PORT: ${port}`))
  .on('error', ():void => console.log(`App fail to listen PORT: ${port}`));
