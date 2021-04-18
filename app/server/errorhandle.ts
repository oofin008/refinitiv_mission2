import {Application, Errback, Request, Response, NextFunction} from 'express';

export const errorHandle = (app: Application):Application => {
  app.use((error: Errback, req: Request, res: Response, next: NextFunction): void => {
    if(!error) {
      next();
    }
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal error, something went wrong"
    });
  });
  return app;
};
