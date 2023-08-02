import mongoose from "mongoose";
// import { MongoClient, ServerApiVersion } from "mongodb";

const mongoAtlasUri = "mongodb+srv://samuelcarvalhodev:N20dhfMJP7pMRojo@alura.4gscso8.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(mongoAtlasUri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true
//   }
// })

// async function run() {
//   try {
//     await client.connect()
//     const coll = await client.db("alura").alura
//     console.log(coll)
//     console.log("Pinged your deployment. You successfully connected to MongoDB!")
//   } finally {
//     await client.close()
//   }
// }

// run().catch(console.dir)

// mongoose.connect("mongodb://localhost:27017/alura")
// const Livro = mongoose.model('Livro', {titulo: String, numeropaginas: Int32, })
mongoose.connect(mongoAtlasUri)
let db = mongoose.connection
export default db