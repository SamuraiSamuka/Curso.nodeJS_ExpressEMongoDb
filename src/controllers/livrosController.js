import livros from '../models/Livro.js';

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros.find();
      res.status(200).json(livrosResultado);
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao listar livros.`});
    }
  }

  static buscarLivro = async (req, res) => {
    try {
      const {id} = req.params;
      const livro = await livros.findById(id);
      res.status(200).json(livro);
    } catch (err) {
      res.status(500).send({message: `${err.message} - id do livro não localizado.`});
    }
  }

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
    }
  }

  static atualizarLivro = async (req, res) => {
    try {
      const {id} = req.params;
      await livros.findByIdAndUpdate(id, {$set: req.body});
      res.status(201).send("Livro atualizado com sucesso.");
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao atualizar livro.`});
    }
  }

  static deletarLivro = async (req, res) => {
    try {
      const {id} = req.params;
      await livros.findByIdAndDelete(id)
      res.status(201).send("Livro deletado com sucesso.");
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao deletar livro.`});
    }
  }
}

export default LivroController;