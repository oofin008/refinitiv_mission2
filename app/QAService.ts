import {QAmockData} from './QAmockData';
import * as QATypes from './QATypes';

async function getQuestion (req:any, res:any) {
  return res.status(200).json({
    success: true,
    data: QAmockData
  })
}

async function getAnswer (req:any, res:any) {
  const { id='' } = req.params;
  const resData = searchAnswer(id, QAmockData);

  if( resData === undefined) {
    return res.status(500).json({
      success: false,
      message: "error, no question id"
    })
  }

  return res.status(200).json({
    success: true,
    data: resData
  })
}

function searchAnswer (id: string, QAmockData: QATypes.QuestionAnswerObjectType[]) {
  return QAmockData.find(val => val.id === id);
}

export {
  getQuestion as getQuestion,
  getAnswer as getAnswer,
};
