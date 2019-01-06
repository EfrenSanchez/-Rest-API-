const express = require ('express');
const morgan = require ('morgan');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);//Gives format outputs JSON 

//middlewares 
app.use(morgan('dev'));//Show the request to server on console 
app.use(express.urlencoded({extended:false}));//Express can get regular input form
app.use(express.json());//Express can get files .json

//routes
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//starting the server
app.listen(app.get('port'), ()=>{
  console.log(`Server on port ${app.get('port')}`);
});