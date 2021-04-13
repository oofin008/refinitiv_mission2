import { Request, Response} from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { QAmockData, AnswermockData } from './QAmockData';
import { AnswerObjectType, QuestionAnswerObjectType } from './QATypes';

export const getQuestionRoute = async (req: Request, res: Response): Promise<Response> => {
  console.log(__dirname);
  getExternalQuestion();
  return res.status(200).json({
    success: true,
    data: QAmockData
  });
};

export const getAnswerRoute = async (req: Request, res: Response): Promise<Response> => {
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

const searchAnswer =  (id: string, QAmockData: AnswerObjectType[]):AnswerObjectType | undefined => {
  return QAmockData.find((val: AnswerObjectType) => val.id === id);
};

const getExternalQuestion = ():QuestionAnswerObjectType => {
  const descPath = path.join(__dirname, '../data/question.json');
  console.log('desc ', descPath);
  const testReadFile = fs.readFileSync(descPath);
  const parseData:QuestionAnswerObjectType = JSON.parse(testReadFile.toString());
  return parseData;
};
