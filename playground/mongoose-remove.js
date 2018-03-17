const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modules/todo');
const {Users} = require('./../server/modules/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5aace9a2a2a399bbeff0d4f2'}).then((todo) => {

// })

Todo.findByIdAndRemove('5aace9a2a2a399bbeff0d4f2').then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2))
})