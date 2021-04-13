import { Application, Request, Response, NextFunction } from 'express';

export const headerInit = (app: Application): void => {
  app.use( (req: Request, res: Response, next: NextFunction): void => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Expose-Headers', 'x-suggested-filename');
    res.setHeader('Content-Type', 'application/json');
    next();
  });
};
