const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//tim tra ve path co ten public va dao sau vao
app.use(express.static(path.join(__dirname,'public')))
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resource/views')); //tra ve cac duong dan//
// console.log('PATH',path.join(__dirname,'resources/views'))
//tao duong dan
app.get('/', (req, res) => { 
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})