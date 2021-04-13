import {Application} from 'express';
import {getQuestionRoute, getAnswerRoute} from './QAService';

export const AppRoute = (app:Application) => {
  app.route('/getquestion').get(getQuestionRoute);
  app.route('/getanswer/:id').get(getAnswerRoute);
};

