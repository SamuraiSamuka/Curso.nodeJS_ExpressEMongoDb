import mongoose from "mongoose";
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

  static buscarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findById(id);
      
      if (autorResultado != null) {res.status(200).json(autorResultado);}
      else {res.status(404).send({message: "Id do autor não localizado."});}

    } catch (err) {
      if (err instanceof mongoose.Error.CastError) {res.status(400).send({message: "Dados fornecidos estão incorretos"});}
      else {res.status(500).send({message: "Erro interno de servidor"});}
    }
  };

  static cadastrarAutor = async (req, res) => {
    try {
      let autor = new autores(req.body);
      const autorResultado = await autor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`});
    }
  };

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send("Autor atualizado com sucesso.");
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao atualizar autor.`});
    }
  };

  static deletarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).send("Autor deletado com sucesso.");
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao deletar autor.`});
    }
  };
}

export default AutorController;