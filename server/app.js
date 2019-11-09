
const restify = require('restify')

const server = restify.createServer({
  name: 'MachineLearning server',
  version: '0.0.1'
})

server.use(restify.plugins.bodyParser())

server.get('/ping', (req, res, next) => {
  console.log('ping')
  res.send({ text: 'pong' })
})

server.listen(8080, () => console.log('Server is listening on 8080'))