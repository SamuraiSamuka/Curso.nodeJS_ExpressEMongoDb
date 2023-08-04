import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao listar autores.`});
    }
  };

  static buscarAutor = async (req, res) => {
    try {
      const {id} = req.params;
      const autor = await autores.findById(id);
      res.status(200).json(autor);
    } catch (err) {
      res.status(500).send({message: `${err.message} - id do autor não localizado.`});
    }
  };

  static cadastrarAutor = async (req, res) => {
    try {
      let autor = new autores(req.body);
      await autor.save();
      res.status(201).send(autor.toJSON());
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`});
    }
  };

  static atualizarAutor = async (req, res) => {
    try {
      const {id} = req.params;
      await autores.findByIdAndUpdate(id, {$set: req.body});
      res.status(201).send("Autor atualizado com sucesso.");
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao atualizar autor.`});
    }
  };

  static deletarAutor = async (req, res) => {
    try {
      const {id} = req.params;
      await autores.findByIdAndDelete(id);
      res.status(201).send("Autor deletado com sucesso.");
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao deletar autor.`});
    }
  };
}

export default AutorController;