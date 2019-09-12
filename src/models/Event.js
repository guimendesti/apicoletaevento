const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  event: String,
  timestamp: String,
})

module.exports = mongoose.model('Event', eventSchema)
