// Import Controller
const eventController = require('../controllers/eventController')

// Create Route
const routes = [
  {
    method: 'POST',
    url: '/api/event',
    handler: eventController.addEvent,
    schema: documentation.addEventSchema
  }
]

module.exports = routes
