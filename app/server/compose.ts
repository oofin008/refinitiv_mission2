import { Application } from 'express';

export const compose = (...fs: Function[]) => (x: Application) => fs.reduce((acc: any, f:any) => f(acc),x);
