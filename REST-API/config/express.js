const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const secret = 'secret';


module.exports = (app) => {
  app.use(cors({
    exposedHeaders: "Authorization"
  }));

  app.use(bodyParser.json());

  app.use(cookieParser(secret));

  app.use(express.static('public'))

};