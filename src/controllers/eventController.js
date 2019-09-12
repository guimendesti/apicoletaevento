// Dependancies
const boom = require('boom')

// Get Models
const Event = require('../models/Event')

// Only Save
exports.addEvent = async (req, reply) => {
  try {
    const event = new Event(req.body)
    return event.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}
