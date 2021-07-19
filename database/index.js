const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pokeDex', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
})

const pokeSchema = new mongoose.Schema({
  name: String,
  type: String,
  img: String
})

const PokeModel = mongoose.model('PokeModel', pokeSchema);

module.exports = PokeModel


