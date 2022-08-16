const express = require('express');
const mongoose = require('mongoose');
const app = express();
const personRoutes = require('./routes/personRoutes');

app.use(express.json())

app.use('/person', personRoutes);

mongoose.connect(
    'mongodb+srv://mongo:mongo@apicluster.01inza4.mongodb.net/apibanco?retryWrites=true&w=majority',
)
    .then(() => {
        console.log('Conectado ao banco de dados')
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })
