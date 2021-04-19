import * as fs from 'fs';
import * as path from 'path';
import { AnswerObjectType, QuestionAnswerObjectType } from './QATypes';

export const getQuestion = ():Promise<QuestionAnswerObjectType[]> => {
  const descPath = path.join(__dirname, '../data/question.json');
  return new Promise((resolve, reject) => {
    fs.readFile(descPath, (err, rawData) => {
      if(err) {
        reject(err);
      } else {
        const parseData: QuestionAnswerObjectType[] = JSON.parse(rawData.toString());
        resolve(parseData);
      }
    });
  });
};

export const getAnswerById = (id: string): Promise<AnswerObjectType | undefined> => {
  const descPath = path.join(__dirname, '../data/answer.json');
  return new Promise((resolve, reject) => {
    fs.readFile(descPath, (err, rawData) => {
      if(err) {
        reject(err);
      } else {
        const parseData: AnswerObjectType[] = JSON.parse(rawData.toString());
        const findResult: AnswerObjectType | undefined = parseData.find((val: AnswerObjectType) => val.id === id);
        resolve(findResult);
      }
    });
  });
};
