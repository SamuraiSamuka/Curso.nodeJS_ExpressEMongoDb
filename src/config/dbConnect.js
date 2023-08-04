import mongoose from "mongoose";

const uriMongoAtlas = process.env.STRING_CONEXAO_DB;


// mongoose.connect("mongodb://localhost:27017/alura")
// const Livro = mongoose.model('Livro', {titulo: String, numeropaginas: Int32, })
async function conectaDb(){
  try {
    await mongoose.connect(uriMongoAtlas);
  } catch (err) {
    console.log(err);
  }
}

conectaDb();

let db = mongoose.connection;
export default db;