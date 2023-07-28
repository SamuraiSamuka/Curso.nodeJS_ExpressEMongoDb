const http = require("http");
const port = 3000;

const rotas = {
  '/': 'Curso de Node',
  '/livros': 'Entrei na pag de livros',
  '/autores': 'Listagem de autores',
  '/editora': 'Pag de editora',
  '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-Type': 'text/plain'})
  console.log(req.url)
  res.end(rotas[req.url]);
})

server.listen(port, () => {console.log(`Servidor ouvindo na porta http://localhost:${port}`)});