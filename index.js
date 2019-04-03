const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected to database: ', db);

    const newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });

    newDish.save()
    .then(dish => {
        console.log(dish);

        return Dishes.find({}).exec();
    })
    .then(dishes => {
        console.log(dishes);

        return Dishes.remove({});
    })
    .then((result) => {
        console.log("Removed all dishes: ", result);
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    });
});
