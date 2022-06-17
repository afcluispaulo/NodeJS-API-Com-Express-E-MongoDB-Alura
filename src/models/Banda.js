import mongoose from "mongoose";

const bandaSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    membro: {type: String, required: true},
  }
);

const bandas= mongoose.model('bandas', bandaSchema);

export default bandas;