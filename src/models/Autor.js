import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String, required: true}
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;
/*
"titulo": "Um livro nada normal 3",
	"autor": "64cbf0d95900893634af72ea",
	"editora": "Anker",
	"numeroPaginas": 140

  "nome": "Arthur Conan Doyle",
	"nacionalidade": "britanico"
  */