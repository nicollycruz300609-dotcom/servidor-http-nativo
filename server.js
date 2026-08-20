import http from 'node:http'
import { url } from 'node:inspector';
import { URL } from 'node:url'

const port = 3000

const status = {
    "status": "ok",
    "date": new Date().toISOString()
}

const produtos = [
    { id: 1, nome: "Sabonete" },
    { id: 2, nome: "Monitor" },
    { id: 3, nome: "Cadeira Gamer" }
]

res.statusCode = 201
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 // o clico nao é finalizado adequadamente (trava a página)
});

server.listen(port, () => {
    console.log("Servidor funcionando na porta ", port)
});


