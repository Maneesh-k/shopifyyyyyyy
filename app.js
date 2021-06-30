const express = require('express');
const request=require('request');

const app = express();
const router = express.Router();

const redirectTO = (req, res) => {
  request('https://node-task-deploy.herokuapp.com/api/v1/storedata',  (error, response, body) => {
    
        if(error) {
             
            res.status(404).json({
                Status:'fail'
            })
        }        
        else {
            res.status(200).json({
                status:'sucess',
                data:body
            })
        }
    });
  

};

const redirect = router.get('', redirectTO);

app.use('/', redirect);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
