// const http = require("http");
// const rotas = {
  //   '/': 'Curso de Node',
//   '/livros': 'Entrei na pag de livros',
//   '/autores': 'Listagem de autores',
//   '/editora': 'Pag de editora',
//   '/sobre': 'Info sobre o projeto'
// }

// const server = http.createServer((req, res) => {
  //   res.writeHead(200, {'content-Type': 'text/plain'})
  //   res.end(rotas[req.url]);
  // })
import "dotenv/config.js"
import app from './src/app.js'

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Servidor ouvindo na porta http://localhost:${port}`)});