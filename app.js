const express = require('express');

const app = express();
const router = express.Router();

const redirectTO = (req, res) => {
  res.redirect('https://node-task-deploy.herokuapp.com/api/v1/storedata', 302);
};

const redirect = router.get('', redirectTO);

app.use('/', redirect);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
