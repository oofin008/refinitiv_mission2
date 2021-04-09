import {Application} from 'express';
import {getQuestion, getAnswer} from './QAService';

export default (app:Application) => {
  app.route('/getquestion').get(getQuestion);
  app.route('/getanswer/:id').get(getAnswer);
};

