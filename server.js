require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(cors())

const { ROLLBAR_ACCESS_TOKEN} = process.env

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

try {
    app.get('/', fakeFunction) 
    }
    catch (error){
        rollbar.error(error)
    }

app.listen(4000, () => console.log('server running on 4000'))