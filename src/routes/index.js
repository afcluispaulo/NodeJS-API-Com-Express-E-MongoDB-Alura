import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import bandas from "./bandasRoutes.js";
import albuns from "./albunsRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        autores,
        bandas,
        albuns,
    )
}

export default routes;