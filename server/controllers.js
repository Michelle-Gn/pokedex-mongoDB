const db = require('../database/index.js')

var controllers = {
  get: function (req, res) {
    db.find({type: 'Grass'}, (err, result) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send(result)
      }
    })
  }
}

module.exports = controllers