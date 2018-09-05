var express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  passport = require('passport'),
  session = require('express-session'),
  path = require('path');

module.exports = function (app) {
  // app.use(logger('tiny'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'multi vision unicorns',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // app.use(express.static(rootPath));
  const rootPath = path.normalize(__dirname + './../dist');
  console.log(rootPath);
  app.use(express.static(rootPath));
}