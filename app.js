const express = require('express')
const app = express()
// const process = Node.Process
require('dotenv').config()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable */
  console.log('server started on port ' + PORT)
  /* eslint-disable */
})
