import bodyParser from 'body-parser'
import helmet from 'helmet'
import dotenv from 'dotenv'
import cors from 'cors'
// import {cors} from '../middleware'
import logger from 'morgan'

if(process.env.NODE_ENV===undefined){
  dotenv.config()
}
/**
 * Function to enable cors, logger, disable x-powered-by, urlencoded
 */
let whiteList = []
if(process.env.NODE_ENV==='development'){
  whiteList = ['http://quoter.workosfera.com', 'http://localhost:3000']
  // whiteList = ['http://quoter.workosfera.com']
} else {
  whiteList = ['http://quoter.workosfera.com']
}


const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


export const utils = (app) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors(corsOptions));
  app.use(helmet())
  if(process.env.NODE_ENV==='development'){
    app.use(logger('dev'))
  }
  app.disable('x-powered-by')
  app.enable('trust proxy')
}
