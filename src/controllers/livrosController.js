import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros.find().populate("autor");
      res.status(200).json(livrosResultado);
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao listar livros.`});
    }
  };

  static buscarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const livro = await livros.findById(id).populate("autor", "nome");
      res.status(200).json(livro);
    } catch (err) {
      res.status(400).send({message: `${err.message} - id do livro não localizado.`});
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      const livroResultado = await livro.save();
      res.status(201).send(livroResultado.toJSON());
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
    }
  };

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send("Livro atualizado com sucesso.");
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao atualizar livro.`});
    }
  };

  static deletarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send("Livro deletado com sucesso.");
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao deletar livro.`});
    }
  };

  static listarLivrosPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora;
      const livrosResultado = await livros.find({"editora": editora});
      res.status(200).send(livrosResultado);
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao buscar livros.`});
    }
  };
}

export default LivroController;