import {QAmockData} from './QAmockData';

async function getQuestion (req:any, res:any) {
  return res.status(200).json({
    success: true,
    data: QAmockData
  })
}

export {
  getQuestion as getQuestion
};
