'use strict'

import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

// app level middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware - files are relative to static directory
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`)
})

app.listen(port, () => console.log(`Express server up and listening on PORT ${port}...`))