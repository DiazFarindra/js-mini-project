const { MongoClient, ObjectId } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'express'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

client.connect((error, client) => {

    // check connection
    if (error) {
        return console.log('connection failed!')
    }

    // connect db
    const db = client.db(dbName)

    // add data
    // db.collection('users').insertOne(
    //     {
    //         name: 'azizikri',
    //         email: 'azizikri@gmail.com',
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('failed!')
    //         }

    //         console.log(result)
    //     }
    // )

    // add multiple data
    // db.collection('users').insertMany(
    //     [
    //         {
    //             name: 'azizikri',
    //             email: 'azizikri@gmail.com'
    //         },
    //         {
    //             name: 'haikale',
    //             email: 'haikale@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('failed!')
    //         }

    //         console.log(result)
    //     }
    // )

    // read data
    // console.log(db.collection('users').find().toArray((error, result) => {
    //     console.log(result)
    // }))

    // read data based on criteria
    // console.log(
    //     db
    //         .collection('users')
    //         .find({ _id: ObjectId("61d59a90c4ad31f240c2a424") })
    //         .toArray((error, result) => {
    //             console.log(result)
    //         })
    // )

    // update data based on id
    // const update = db.collection('users').updateOne(
    //     { _id: ObjectId("61d59a90c4ad31f240c2a424") },
    //     {
    //         $set: {
    //             name: 'azizikri'
    //         },
    //     }
    // )
    // return result in promise
    // update
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error))

    // delete data based on id
    // db.collection('users').deleteOne(
    //     {
    //         _id: ObjectId("61d59a90c4ad31f240c2a424")
    //     },
    // ).then(result => console.log(result))
    // .catch(error => console.log(error))

})
