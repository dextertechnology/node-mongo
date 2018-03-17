const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modules/todo');
const {Users} = require('./../server/modules/user');


// var id = "5aaca11591fb7424fa3e2fcb";

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// } 

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
    
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo', todo)
// }).catch((e) => {
//     console.log(e)
// });



Users.findById('5aa514447ca32d5ffc356268').then((user) => {
    if(!user) {
        return console.log("Unable to find user");
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});