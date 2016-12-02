import Confidence from 'confidence'
import AppConfig from './config'

const criteria = {
  env: process.env.NODE_ENV
}

const manifest = {
  $meta: 'Our main server manifest',
  server: {},
  connections: [ AppConfig.get('/server') ],
  registrations: [
    {
      plugin: {
        register: 'good',
        options: AppConfig.get('/logging')
      }
    },
    { plugin: './hello' }
  ]
}


const store = new Confidence.Store(manifest)

export default {
  get: (key) => store.get(key, criteria),
  meta: (key) => store.meta(key, criteria)
}
