import mongoose from "mongoose";

const albumSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: true},
    banda: {type: mongoose.Schema.Types.ObjectId, ref: 'bandas', required: true},
    gravadora: {type: String, required: true},
    nacionalidadeAlbum: {type: String},
    numeroFaixas: {type: Number}
  },

  {
    versionKey: false
  }
);

const albuns= mongoose.model("albuns", albumSchema);

export default albuns;