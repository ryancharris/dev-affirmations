const axios = require("axios");
require("dotenv").config();

const addTweet = tweetId => {
  // Make HTTP request to hit AWS Lambda function
  axios({
    data: {
      id: tweetId
    },
    method: "post",
    url: process.env.LAMBDA_ADDRESS,
    headers: {
      "x-api-key": process.env.LAMBDA_KEY
    }
  })
    .then(res => {
      console.log("Adding tweet to database...");
      return res;
    })
    .catch(err => {
      console.log(err);
    })
    .then(res => {
      console.log("Tweet added 🙌");
      console.log(res.data);
    });
};

module.exports = {
  addTweet
};
