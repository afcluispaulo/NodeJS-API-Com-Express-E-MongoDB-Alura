import albuns from "../models/Album.js";

class AlbumController {

    static listarAlbuns = (req, res) => {
        albuns.find()
        .populate('banda', 'nome')
        .exec((err, albuns) => {
            res.status(200).json(albuns)
        })
    }

    static listarAlbumPorId = (req, res) => {
        const id = req.params.id;

        albuns.findById(id)
            .populate('banda', 'nome')
            .exec((err, albuns) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Id do álbum não localizado.`})
            } else {
                res.status(200).send(albuns);
            }
        })
    }

    static cadastrarAlbum = (req, res) => {
        let album = new albuns(req.body);

        album.save((err) => {
            if(err) {
                // 500 = servidor nao conseguiu processar o que ta mandando
                res.status(500).send({message: `${err.message} - falha ao cadastrar álbum`})
            } else {
                res.status(201).send(album.toJSON())
            }
        })
    }

    static atualizarAlbum = (req, res) => {
        // duas informações: id e conteúdo pelo qual vai substituir o cadastro. 
        const id = req.params.id

        albuns.findByIdAndUpdate(id, {$set: req.body}, (err) => { 
            if(!err) {
                res.status(200).send({message: 'Álbum atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAlbum = (req, res) =>  {
        const id = req.params.id;

        albuns.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Álbum removido com sucesso'})
            } else {
                res.status(300).send({message: err.message})
            }
        })
    }

    // Pesquisa por Titulo
    static listarAlbumPorTitulo = (req, res) => {
        const titulo = req.query.titulo

        albuns.find({'titulo': titulo}, {}, (err, albuns) => {
            res.status(200).send(albuns)
        })
    }


    // Pesquisa por Editora
    static listarAlbumPorGravadora = (req, res) => {
        const editora = req.query.gravadora

        albuns.find({'editora': editora}, {}, (err, albuns) => {
            res.status(200).send(albuns)

        })
    }
}

export default AlbumController;