import {getQuestion, getAnswer} from './QAService';

export default (app:any) => {
  app.route('/getquestion').get(getQuestion)
  app.route('/getanswer/:id').get(getAnswer)
}

