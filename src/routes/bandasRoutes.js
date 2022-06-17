import express from "express";
import BandaController from "../controllers/bandasController.js";

const router = express.Router();

router
    .get("/bandas", BandaController.listarBandas)
    .get("/bandas/busca", BandaController.listarBandaporTitulo)
    .get("/bandas/busca", BandaController.listarBandaPorEditora)
    .get("/bandas/:id", BandaController.listarBandaPorId)
    .post("/bandas", BandaController.cadastrarBanda)
    .put("/bandas/:id", BandaController.atualizarBanda)
    .delete("/bandas/:id", BandaController.excluirBanda)
    
export default router;