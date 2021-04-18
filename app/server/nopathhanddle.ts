import { Application, Request, Response, NextFunction } from 'express';

export const pathNotFound = (app: Application): Application => {
  app.use( (req: Request, res: Response, next: NextFunction): void => {
    res.status(404).json({
      success: false,
      message: "path not found"
    });
  });
  return app;
};
