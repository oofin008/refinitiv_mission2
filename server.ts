import app from './config/express';

// Get port and start server
const port: string|number = process.env.PORT || 3000;
app.listen(port, ():void => console.log(`App listen on PORT: ${port}`));
