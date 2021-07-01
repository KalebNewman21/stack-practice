//Could use import instead i believe
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')

const app =  express()
require('./database');

//Watch for bodyParser, may need to use express.json() instead
app.use(express.json());
app.use(cors());

//API
const users = require('/api/users');
app.use('/api/users', users)

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
})
