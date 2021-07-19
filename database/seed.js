const PokeModel = require('./index.js')
const PokeData = require('../pokemon.json')

console.log(PokeModel);
console.log(PokeData);

PokeModel.insertMany(PokeData, function (error, docs) {
  if (error) {
    console.log(error)
  } else {
    console.log(`${PokeData.length} pokemon inserted`)
  }
})

