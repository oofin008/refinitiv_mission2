import { Request, Response } from 'express';
import { getQuestion, getAnswerById } from './QAService';
import { QuestionAnswerObjectType, AnswerObjectType } from './QATypes';

export const routerGetQuestion = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data: QuestionAnswerObjectType[] = await getQuestion(); 
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

export const routerGetAnswerById = async (req: Request, res: Response): Promise<Response> => {
  const { id = '' } = req.params;
  try {
    const data: AnswerObjectType | undefined = await getAnswerById(id);
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
