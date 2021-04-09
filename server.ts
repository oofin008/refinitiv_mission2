import express from 'express';
import index from './app/index';
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, access_token'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Expose-Headers', 'x-suggested-filename');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Authorization', 'Bearer {cbe913af6254f300a338d5f5ffd6f66b}');
  next();
});

//logger
app.use(function (req, res, next) {
  console.log('== request from ==', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  next();
});

app.route('/').get((req, res) => {
  res.status(200).json({message: 'hello world'});
});

index(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listen on PORT: ${port}`));
