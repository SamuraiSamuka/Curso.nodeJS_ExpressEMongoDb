import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/livro.js';

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso!')
})

const app = express();

app.use(express.json());

// const livros = [
//   {
//     id: 1,
//     titulo: "Senhor dos Anéis"
//   },
//   {
//     id: 2,
//     titulo: "O Hobbit"
//   }
// ]

function buscaIndexLivro(id){
  const index = livros.findIndex(livro => livro.id == id);
  return index
}

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
})

app.get('/livros', async (req, res) => {
  try {
    const livrosResultado = await livros.find();
    res.status(200).json(livrosResultado);
  } catch (err) {
    res.status(500).json(err);
  }
})

app.get('/livros/:id', (req, res) => {
  const {id} = req.params;
  const index = buscaIndexLivro(id);
  res.status(200).json(livros[index]);
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  console.log('Livro cadastrado com sucesso');
  res.status(201).json(livros);
})

app.put('/livros/:id', (req, res) => {
  const {id} = req.params;
  const index = buscaIndexLivro(id);
  livros[index].titulo = req.body.titulo;
  console.log('Livro modificado com sucesso');
  res.status(201).json(livros[index])
})

app.delete('/livros/:id', (req, res) => {
  const {id} = req.params;
  livros.splice(buscaIndexLivro(id), 1);
  res.status(200).send('Livro deletado com sucesso');
})

export default app;