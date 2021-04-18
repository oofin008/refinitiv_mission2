import * as fs from 'fs';
import * as path from 'path';
import { AnswerObjectType, QuestionAnswerObjectType } from './QATypes';

export const getQuestion = ():Promise<QuestionAnswerObjectType[]> => {
  const descPath = path.join(__dirname, '../data/question.json');
  const promise: Promise<QuestionAnswerObjectType[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile(descPath, (err, rawData) => {
        if(err) {
          reject(err);
        } else {
          const parseData: QuestionAnswerObjectType[] = JSON.parse(rawData.toString());
          resolve(parseData);
        }
      });
    },0);
  });
  return promise;
};

export const getAnswerById = (id: string): Promise<AnswerObjectType | undefined> => {
  const descPath = path.join(__dirname, '../data/answer.json');
  const promise: Promise<AnswerObjectType | undefined> = new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile(descPath, (err, rawData) => {
        if(err) {
          reject(err);
        } else {
          const parseData: AnswerObjectType[] = JSON.parse(rawData.toString());
          const findResult: AnswerObjectType | undefined = parseData.find((val: AnswerObjectType) => val.id === id);
          resolve(findResult);
        }
      });
    }, 0);
  });
  return promise;
};
