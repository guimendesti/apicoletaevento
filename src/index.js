// Dependancies
const fastify = require('fastify')({
  logger: true
})

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// MoongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://mongo-dev:27017')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// Routes
const routes = require('./routes')
routes.forEach((route, index) => {
  fastify.route(route)
})

// Main Route
fastify.get('/', async (request, reply) => {
  return { api: 'https://github.com/guimendesti/apicoletaevento#readme' }
})

// Run
const start = async () => {
  try {
    await fastify.listen(3001)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
