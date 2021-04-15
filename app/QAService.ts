import * as fs from 'fs';
import * as path from 'path';
import { AnswerObjectType, QuestionAnswerObjectType } from './QATypes';

export const getQuestionFile = ():QuestionAnswerObjectType[] => {
  const descPath = path.join(__dirname, '../data/question.json');
  // console.log('desc ', descPath);
  const testReadFile = fs.readFileSync(descPath);
  const parseData:QuestionAnswerObjectType[] = JSON.parse(testReadFile.toString());
  return parseData;
};

export const getAnswerFile = (id: string): AnswerObjectType | undefined => {
  const descPath = path.join(__dirname, '../data/answer.json');
  const testReadFile = fs.readFileSync(descPath);
  const parseData: AnswerObjectType[] = JSON.parse(testReadFile.toString());
  return parseData.find((val: AnswerObjectType) => val.id === id);
};
