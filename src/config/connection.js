import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'
import chalk from 'chalk'

/**
 * Mongoose db connection
 * @param {URI_DB} URI - Database Uri
 */
export const mongooseConnection = (URI) => {
    mongoose.set('debug', true)
    mongoose.connect(URI,{useNewUrlParser: true })
    // mongoose.connection.openUri(URI)
        .then(() => {
            console.log('%s Connected to db: %s successfully via MONGOOSE', chalk.green('✓'), URI)
        })
        .catch(err => {
            console.log(err)
            console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'))
            process.exit(1)
        })
}

/**
 * Mongo Driver db connection
 * @param {URI_DB} URI - Database Uri
 */
export const mongodbConnection = (URI) => {
    MongoClient.connect(URI)
        .then(() => {
            console.log('%s Connected to db: %s successfully via MONGODRIVER', chalk.green('✓'), URI)
        })
        .catch(err => {
            console.log(err)
            console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'))
            process.exit()
        })
}
