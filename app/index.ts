import {getQuestion} from './QAService';

export default (app:any) => {
  app.route('/getquestion').get(getQuestion)
}

