import express, { Application } from 'express';
import {headerInit, logger, errorHandle, pathNotFound, compose} from './app/server';
import { appRoute } from './app';

const app: Application = express();

const appInit = compose(headerInit, logger, appRoute, errorHandle, pathNotFound);
appInit(app);

// Get port and start server
const port: string|number = process.env.PORT || 3000;
app
  .listen(port, ():void => console.log(`App listen on PORT: ${port}`))
  .on('error', ():void => console.log(`App fail to listen PORT: ${port}`));
