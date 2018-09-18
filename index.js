const Hapi = require('hapi')
const tunebox = require('tunebox')
tunebox.init(require('./config'))

const server = Hapi.server({
  port: '60001',
  host: '0.0.0.0'
})

const init = async () => {
  await server.register({
    plugin: require('hapi-router'),
    options: {
      routes: './routes.js' // uses glob to include files
    }
  })
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
