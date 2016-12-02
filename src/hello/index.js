import Joi from 'joi'

/**
 * Hello World
 * Returns a hello world message and the hostname of the machine the
 * server is running on
 *
 * url: /hello
 */

export const register = (server, options, next) => {

  // Add the route
  server.route({
    method: 'GET',
    path: '/hello',
    config: {
      tags: ['api'],
      validate: {
        query: {
          firstName: Joi.string(),
          lastName: Joi.string()
        }
      },
      handler: (request, reply) => {
        reply('hello world')
      }
    }
  })

  next()

}

register.attributes = {
  name: 'hello'
}
