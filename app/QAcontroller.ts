import { Request, Response } from 'express';
import { getQuestionFile, getAnswerFile } from './QAService';
import { QuestionAnswerObjectType, AnswerObjectType } from './QATypes';

export const getQuestionRoute = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data: QuestionAnswerObjectType[] = await getQuestionFile(); 
    return res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error! something went wrong"
    });
  }
};

export const getAnswerRoute = async (req: Request, res: Response): Promise<Response> => {
  const { id = '' } = req.params;
  try {
    const data: AnswerObjectType | undefined = await getAnswerFile(id);
    if (data === undefined) throw new Error("Error! No answer id found");
    return res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error! something went wrong"
    });
  }
};
