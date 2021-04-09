import {QAmockData, AnswermockData} from './QAmockData';
import * as QATypes from './QATypes';

export const getQuestion = async (req:any, res:any) => {
  return res.status(200).json({
    success: true,
    data: QAmockData
  });
};

export const getAnswer = async (req:any, res:any) => {
  const { id='' } = req.params;
  const resData = searchAnswer(id, AnswermockData);

  if( resData === undefined) {
    return res.status(500).json({
      success: false,
      message: "error, no question id"
    });
  }

  return res.status(200).json({
    success: true,
    data: resData
  });
};

const searchAnswer =  (id: string, QAmockData: QATypes.AnswerObjectType[]) => {
  return QAmockData.find((val: QATypes.AnswerObjectType) => val.id === id);
};
