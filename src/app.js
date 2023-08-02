import express from 'express'
// import db from './config/dbConnect.js';
// import livros from './models/livro.js';

// db.on('error', console.log.bind(console, 'Erro de conexão'))
// db.once("open", () => {
//   console.log('Conexão com o banco feita com sucesso!')
// })

const app = express()

app.use(express.json())

const livros = [
  {
    id: 1,
    titulo: "Senhor dos Anéis"
  },
  {
    id: 2,
    titulo: "O Hobbit"
  }
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node')
})

app.get('/livros', (req, res) => {
  // livros.find((err, livros) => {
  // })
  res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
  // livros.find((err, livros) => {
  // })
  const livro = livros.find(livro => livro.id === req.params.id)
  res.status(200).json(livro)
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso');
})

app.delete('/livros/:id', (req, res) => {
  const indiceLivro = livros.findIndex(livro => livro.id === req.params.id)
  livros.splice(indiceLivro, 1)
  res.status(200).send('Livro deletado com sucesso')
})

export default app;