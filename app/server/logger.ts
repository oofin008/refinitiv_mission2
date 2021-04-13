import { Application, Request, Response, NextFunction } from 'express';

export const logger = (app: Application): void => {
  app.use( (req: Request, res: Response, next: NextFunction): void => {
    console.log('== request from ==', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    next();
  });
};
