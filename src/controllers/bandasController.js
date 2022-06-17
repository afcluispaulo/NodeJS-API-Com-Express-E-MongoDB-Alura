import bandas from "../models/Banda.js";

class BandaController {

    static listarBandas = (req, res) => {
        bandas.find((err, bandas) => {
            res.status(200).json(bandas)
        })
    }

    static listarBandaPorId = (req, res) => {
        const id = req.params.id;

        bandas.findById(id)
            .populate('album', 'titulo')
            .exec((err, bandas) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Id da Banda não localizado.`})
            } else {
                res.status(200).send(bandas);
            }
        })
    }

    static cadastrarBanda = (req, res) => {
        let banda = new bandas(req.body)

        banda.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar banda`})
            } else {
                res.status(201).send(banda.toJSON())
            }
        })
    }

    static atualizarBanda = (req, res) => {
        const id = req.params.id

        bandas.findByIdAndUpdate(id, {$set: req.body}, (err) => { 
            if(!err) {
                res.status(200).send({message: 'Banda atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirBanda = (req, res) =>  {
        const id = req.params.id;

        bandas.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Banda removido com sucesso'})
            } else {
                res.status(300).send({message: err.message})
            }
        })
    }

    // Pesquisa por Titulo
    static listarBandaporTitulo= (req, res) => {
        const nome = req.query.nome

        bandas.find({'nome': nome}, {}, (err, banda) => {
            res.status(200).send(banda)
        })
    }


    // Pesquisa por Editora
    static listarBandaPorEditora = (req, res) => {
        const editora = req.query.editora

        bandas.find({'editora': editora}, {}, (err, bandas) => {
            res.status(200).send(bandas)

        })
    }
}

export default BandaController;