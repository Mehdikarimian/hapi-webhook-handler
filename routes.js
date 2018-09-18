module.exports = [
  {
    method: 'POST',
    path: '/bienteha-service-core',
    config: {
      handler (request) {
        console.log(request)
      }
    }
  },
  {
    method: 'POST',
    path: '/bienteha-service-ravis',
    config: {
      handler (request) {
        console.log(request)
      }
    }
  }

]
