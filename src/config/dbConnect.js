// conectar com o banco de dados
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@cluster0.qjqic.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;