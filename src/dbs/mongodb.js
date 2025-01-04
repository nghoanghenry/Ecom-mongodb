'use-strict'

const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/ecommerce'

class DataBase {
    constructor(){
        this.connect()
    }

    connect(type = 'mongodb'){
        mongoose.set('debug', true)
        mongoose.set('debug', {color : true})
        mongoose.connect(connectionString).then(() => {
            console.log('Database connection successful')
        }
        ).catch((error) => {
            console.log('Database connection failed. Exiting now...')
            console.error(error)
            process.exit(1)
        })
    }
    static getInstance(){
        if(!DataBase.instance){
            DataBase.instance = new DataBase()
        }
        return DataBase.instance
    }
}

const db = DataBase.getInstance()
module.exports = db