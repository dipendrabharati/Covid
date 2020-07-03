const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const app = express();
const port = 5000;
const path = require('path');
// Connection URL, mongodb its a type of connect like http, 
const url = process.env.MONGO_HOST || 'mongodb://localhost:27017';

// Database Name
const dbName = 'Lab6';

// Create a new MongoClient
const client = new MongoClient(url);

const bodyParser = require('body-parser');       // express builtin middleware    
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));// intercepts raw body& parses in app-usable form


// app.use(express.static(path.join('build')));
// app.get('*', (req, res) => {
// res.sendFile(path.join(__dirname, 'build/index.html'));
// });

// Use connect method to connect to the Server
// client.connect is a async function that triggers this callback
client.connect(err => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Connected successfully to server');
  const db = client.db(dbName);

  app.get('/messanger/login', (req, res) => {
    console.log('check login');
    if (!req.query.password){
      res.send('Wrong password');
    } else {
    db.collection('LoginInfo')
      .findOne({  // this is promise function which will do all sorts of utility thing
                   // this mehtod is going to match this key with this value in mongodb
        userId: req.query.userId
      })
      .then(doc => {
        console.log(doc);
        if ( doc.password !== req.query.password){
          res.send({
               valid:false
          });
        } else{
          res.send({
            valid:true,
            cases:doc.cases,
            deaths:doc.deaths,
            dangerzone:doc.dangerzone
          })
        }
      })
      .catch(e => {
        console.log(e);
        res.send('Error', e);
      });
    }
  });

  app.post('/messanger/notes/create', (req,res) => {
    db.collection('LoginInfo')
    .insert(
      { userId:req.body.userId,
        password: req.body.password,
        cases:req.body.cases,
        deaths:req.body.deaths,
        dangerzone:req.body.dangerzone
       }
    )
    .then((doc) => {
          console.log(doc);
          res.send('Post Successsful')
    })
    .catch(e => {
      console.log(e);
      res.status(404).send('error');
    })
    
      });
       app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
