
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = 4000;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
  
});
app.use('/', router);
app.listen(process.env.port || port);