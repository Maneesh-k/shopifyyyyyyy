const request=require('request');

exports.getApi = (req, res) => {
  request(
    'https://node-task-deploy.herokuapp.com/api/v1/storedata',
    (error, response, body) => {
        const data=JSON.parse(body)
      if (error) {
        res.status(404).json({
          status: false,
        });
      } else {
        res.status(200).json({
          status: true,
          data:data.data,
          result:data.result
        });
      }
    },
  );
};
