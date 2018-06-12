// app.js
const express    = require('express');
const app        = express();
const hbs        = require('hbs') ;
const  path      = require('path');
const expressLayouts     = require('express-ejs-layouts');
const bodyParser = require('body-parser');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(myFakeMiddleware);


// function myFakeMiddleware(){
//   console.log("myFakeMiddleware was called!");
 
// }
// app.get('/', function (req, res) {
//   console.log(req); 
//   });



//  app.get('/users/:username', function (req, res) {
//     res.send(req.params);
//   });


 app.get('/books/:bookId', function (req, res) {
    res.send(req.params);
  });

  app.get('/users/:username/books/:bookId', function (req, res) {
    res.send(req.params);
  }) ;

  app.get('/search', function (req, res) {
    res.send(req.query);
  });

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/get-user-info', (req, res) => {
    res.render('user-info-form');
  });


  app.get('/display-user-info', (req, res) => {
    let name      = req.query.name;
    let age       = req.query.age;
    let superhero = req.query.superhero;
  
    res.send(`
      Your name is ${name}
      Your age is ${age}
      Your favorite superhero is ${superhero}
    `);
  });

  app.get('/login', (req, res) => {
    res.render('login');
  });
//   app.post('/login', (req, res) => {
//     let email    = req.query.ironhacker@gmail.com;
//     let password = req.body.password;
    
//     res.send(`Email: ${email}, Password: ${password}`);
//   });

  app.post('/login2', (req, res) => {
    // let email    = req.body.ironhacker@gmail.com;
    // let password = req.body.password;
    const {email, password} = req.body;
    
    if (email === "ironhacker@gmail.com" && password === "password"){
        res.send("welcome");
      } else {
        res.send("Go away");
      }
    res.send(`Email: ${email}, Password: ${password}`);
  });

  app.get('/test', (req, res) => {
    res.send("We made it to test!");
  });

app.listen(3000, () => console.log('Example app listening on port 3000!'));