import Confidence from 'confidence'
import pkg from '../package.json'

const criteria = {
  env: process.env.NODE_ENV
}

const config = {

  $meta: 'Our main server config',

  pkg,

  server: {
    port: '8099',
    host: '0.0.0.0'
  },

  api: {
    info: {
      title: 'API_NAME',
      description: 'API_DESCRIPTION',
      version: pkg.version
    }
  },

  logging: {
    ops: {
      interval: 1000
    },
    reporters: {
      myConsoleReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      }, {
        module: 'good-console'
      }, 'stdout']
    }
  }
}

const store = new Confidence.Store(config)

export default {
  get: (key) => store.get(key, criteria),
  meta: (key) => store.meta(key, criteria)
}
