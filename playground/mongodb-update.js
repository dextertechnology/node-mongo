const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    const myDb = db.db('TodoApp')

    // myDb.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5aa5032efd9e10f84280b0b7')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // })

    myDb.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aa3f8f6fe2b9b3753fd9200')
    }, {
        $set:{
            name: 'Diwakar Pandey'
        },
        $inc: {
            age: -3
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    })
    
    // db.close();
});