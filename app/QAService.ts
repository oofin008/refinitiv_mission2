import { Request, Response} from 'express';
import {QAmockData, AnswermockData} from './QAmockData';
import * as QATypes from './QATypes';

export const getQuestion = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    success: true,
    data: QAmockData
  });
};

export const getAnswer = async (req: Request, res: Response): Promise<Response> => {
  const { id='' } = req.params;

  try {
    const resData = searchAnswer(id, AnswermockData);
    if( resData === undefined) {
      throw "error, no question id";
    }
    return res.status(200).json({
      success: true,
      data: resData
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error
    });
  }
};

const searchAnswer =  (id: string, QAmockData: QATypes.AnswerObjectType[]) => {
  return QAmockData.find((val: QATypes.AnswerObjectType) => val.id === id);
};
