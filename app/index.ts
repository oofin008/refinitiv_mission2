import {Application} from 'express';
import { routerGetQuestion, routerGetAnswerById } from './QAcontroller';

export const appRoute = (app:Application): Application => {
  app.route('/getquestion').get(routerGetQuestion);
  app.route('/getanswer/:id').get(routerGetAnswerById);
  return app;
};

