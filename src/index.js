import 'express-group-routes';
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import db from './config/db'
// import Raven from 'raven'
import { serve } from './config/server'
import { utils } from './config/utils'
import { mongooseConnection } from './config/connection'
// import  db from './config/db'
import API_ADMIN from './api/private';
import API_PUBLIC from './api/public';

// Raven.config('https://868aaa841e224500ab9eaee605f9855e:d92f2cf1a46c42ebbd2181b3f08cd674@sentry.io/294717').install();

const PORT = process.env.PORT || 3003
const DB = process.env.MONGODB_URI || db.heroku

const app = express()

utils(app)
mongooseConnection(DB)

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/', API_ADMIN)
app.use('/', API_PUBLIC)


serve(app,PORT)
