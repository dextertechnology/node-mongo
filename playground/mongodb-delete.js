const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    const myDb = db.db('TodoApp')

    //deleteMany
    // myDb.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })

    // deleteOne
    // myDb.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
        
    // })
    
    // findOneAndDelelte
    // myDb.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // myDb.collection('Users').deleteMany({name: 'Diwap'}).then((result) => {
    //     console.log(result);
        
    // })

    myDb.collection('Users').findOneAndDelete({
        _id: new ObjectID('5aa3fc504bda0e39cd85556f')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
        
    })
    
    // db.close();
});