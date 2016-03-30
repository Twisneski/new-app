'use strict'

var express = require('express');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
var app = express();
var db = require('./models/');

app.set('views', './views');
app.set('view engine', 'jade');

app.use(stormpath.init(app, {
  expand: {
    customData: true
  }
}));

app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/newLease', (req,res) => {
  res.render('newLease', {
    title: 'New Lease'
  });
});

//*****THIS IS TO POST NEW LEASE DATA FORM - this goes to all three tables****
app.post('/newLease', (req, res) => {
  console.log(req.body);
  // SAVE BUILDING INFO TO BUILDING TABLE
  db.building.create(req.body)
    .then( (savedBuilding) => {
    // GET BUILDING ID, SAVE UNIT INFO
    console.log('saved building info', savedBuilding)
    req.body.buildingId = savedBuilding.id;
    db.unit.create(req.body)
      .then ( ( savedUnit) => {
        console.log('saved unit info', savedUnit)
        req.body.unitId = savedUnit.id;
        db.tenant.create(req.body)
          .then ( ( savedTenant) => {
            console.log('saved tenant info', savedTenant)
          })
        });
    });
  res.redirect('/newLease');
});//end of post function

//***THIS IS TO POST ACTUAL DATA FORM - this info goes to tenant table
app.post('/actual', (req, res) => {
  console.log(req.body);
  db.expenses.create(req.body)
    .then( (savedExpense) => {
    console.log('saved actual info', savedExpense)
  res.redirect('/actual');
  });
});//end of post function

//***THIS IS TO POST BUDGET DATA FORM - this info goes to tenant table
app.post('/budget', (req, res) => {
  console.log(req.body);
  db.expenses.create(req.body)
    .then( (savedExpense) => {
    console.log('saved budget info', savedExpense)
  res.redirect('/budget');
  });
});//end of post function

//****PULL BUDGET AND ACTUAL INFO FOR REPORT**
app.get('/budgetVactual', (req, res) => {
    db.expenses.findOne({where: {type: 'budget'}})
      .then( (savedBudget) => {
        console.log('saved budget info', savedBudget.dataValues)
        db.expenses.findOne({where: {type: 'actual'}})
        .then( (savedActual) => {
          console.log('------>', savedActual)
          console.log('saved actual info', savedActual.dataValues)
          db.building.findOne({where: {buildingNumber: savedActual.buildingNumber}})
          .then( (savedBuilding) => {
            console.log('saved building info', savedBuilding.dataValues)
            res.render('budgetVactual', {
              budget: savedBudget.dataValues,
              actual: savedActual.dataValues,
              building: savedBuilding.dataValues
            });
          })
        })
    });
});
//***Edit budgetVactual Info on new report**
//populate another FORM to be edited - value would actual.fieldname or budget.fieldname
//similar to create
//add method override to delete or put
//create a new form for each actual  and budget
// app.put('budgetVactual', (req, res) => {
//   db.budget.find({} => {
//   })
//   res.render('new-budgetVactual', {
//     budget: req.budget
//   })
// })

//***Update budgetVactual Info on report**
// app.put('budgetVactual', (req, res) => {
//   req.budget.remove({} => {
//   })
//   res.render('new-budgetVactual')
// })

//***Delete budgetVactual Info on report**
// app.delete('budgetVactual', (req, res) => {
//   req.budget.remove({} => {
//   })
//   res.render('new-budgetVactual')
// })


db.sequelize.sync().then(() => {
  console.log('DB connected');
});

app.on('stormpath.ready',function(){
  console.log('Stormpath Ready');
});
app.listen(3000);



