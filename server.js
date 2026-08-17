const http = require('node:http')

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) => {
console.log(`Requisição recebida! ${req.method} ${req.url}`);
console.log(' data e hora: ${new date().toiSOString()}')

res.statusCode = 201
res.setHeader('Content-Type', 'application/json');
  //sem o res.end trava o navegador
});

server.listen(porta, ()=> {
console.log(`Servidor ouvindo na porta ${porta}`)
});

