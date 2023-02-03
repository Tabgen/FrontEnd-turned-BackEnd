const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser)

const textData = require('./getText.json');

server.get('/api/texts', (req, res, next) => {
    res.status(200).send(textData);
});

server.listen(3000, () => {
    console.log('JSON server, listening on port 3000');
});