const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const secret = 'secret';


module.exports = (app) => {
  app.use(cors({
    exposedHeaders: "Authorization"
  }));

  app.use(express.json());

  app.use(express.urlencoded({
    extended: true
  }));

  app.use(cookieParser(secret));

};