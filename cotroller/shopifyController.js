const request=require('request');

exports.getApi = (req, res) => {
  request(
    'https://node-task-deploy.herokuapp.com/api/v1/storedata',
    (error, response, body) => {
        const data=JSON.parse(body)
      if (error) {
        res.status(404).json({
          status:"fail"
        });
      } else {
        res.status(200).json({
          status:"sucess"
          result:data.result
        });
      }
    },
  );
};
