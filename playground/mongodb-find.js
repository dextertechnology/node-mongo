const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    const myDb = db.db('TodoApp')

    // myDb.collection('Todos').find({
    //     _id : new ObjectID('5aa3fd6ecd8b5a2665ddb828')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
        
    // })

    myDb.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
        
    })

    myDb.collection('Users').find({
        name: 'Diwap'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
        
    })

    // db.close();
});