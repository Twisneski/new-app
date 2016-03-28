'use strict'

var express = require('express');
var stormpath = require('express-stormpath');
var app = express();


app.set('views', './views');
app.set('view engine', 'jade');

app.use(stormpath.init(app, {
  expand: {
    customData: true
  }
}));

app.get('/', stormpath.getUser, (req, res) => {
  res.render('home', {
    title: 'Welcome'
  });
});

app.get('/budget', (req, res) => {
  res.render('budget', {
    title:  'Budget'
  });
});

app.get('/actual', (req, res) => {
  res.render('actual', {
    title:  'Actual Cam Amounts'
  });
});

app.get('/report', (req, res) => {
  res.render('report', {
    title:  'Reports'
  });
});

app.use('/newLease',stormpath.loginRequired,require('./newLease')());

app.on('stormpath.ready',function(){
  console.log('Stormpath Ready');
});
app.listen(3000);


