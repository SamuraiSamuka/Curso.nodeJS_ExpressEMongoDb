import mongoose from "mongoose";

const uriMongoAtlas = "mongodb+srv://samuelcarvalhodev:N20dhfMJP7pMRojo@alura.4gscso8.mongodb.net/?retryWrites=true&w=majority";


// mongoose.connect("mongodb://localhost:27017/alura")
// const Livro = mongoose.model('Livro', {titulo: String, numeropaginas: Int32, })
async function conectaDb(){
  try {
    await mongoose.connect(uriMongoAtlas);
  } catch (err) {
    console.log(err)
  }
}

conectaDb();

let db = mongoose.connection;
export default db;