// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatorTrashTalk = require('./trash_talk_generator')
const handlebars = require('handlebars')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//自定義helper
handlebars.registerHelper('if_equal', function (job, expectedJob, options) {
  if (job === expectedJob) {
    return options.fn(this);
  }
  return options.inverse(this);
});

// setting routes
//GET
app.get('/', (req, res) => {
  res.render('index')
})

//POST
app.post('/', (req, res) => {
  //職業
  const status = req.body.customRadio
  //結果
  const output = generatorTrashTalk(status)
  res.render('index', { status: status, output: output })
})

// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
