import {Application} from 'express';
import { getQuestionRoute, getAnswerRoute } from './QAcontroller';

export const appRoute = (app:Application): Application => {
  app.route('/getquestion').get(getQuestionRoute);
  app.route('/getanswer/:id').get(getAnswerRoute);
  return app;
};

