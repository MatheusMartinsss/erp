const db = require('../models')
const Contas = db.contas;


exports.createCount = (req, res) =>{
    console.log('API CHAMADA')
    const conta = new Contas({
        Nome: req.body.nome,
        Valor: req.body.valor,
        Historico: req.body.historico,
        Documento: req.body.documento,
        DataEmissao: req.body.dataEmissao,
        DataVencimento: req.body.dataVencimento
    });
    conta
        
        .save(conta)
        .then(data => {
            res.send(data)
            console.log(conta)
        })

 
}
exports.loadAll = (req, res) =>{

    Contas.find()
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({message: err.message || 'Ocorreu um erro'})
        })
}
exports.findOne = (req,res) =>{
    const documento = req.params.documento;
    Contas.findOne({Documento: documento})
        .then(data =>{
            if(!data)
                res.status(404).send({message: 'not found tutorial with id' + documento})
            else res.send(data);    
        })
 
}
exports.update = (req, res) =>{
    const _id = req.params.id;
    console.log(_id)
    Contas.findOneAndUpdate({Documento: _id}, req.body)
        .then(data =>{
            if(!data)
                res.status(404).send({message: 'Os dados não podem estar vazio!'})
            else res.send({message: 'dados atualizados com sucesso'})    
        })
}
exports.findDeleteOne = (req, res) =>{
    const _id = req.params.id;
    Contas.findOneAndDelete({Documento: _id})
        .then(data =>{
            if(!data)
                res.status(404).send({message: 'os dados não podem estar vazio'})
            else res.send({message: 'documento deletado com sucesso!'})    
        })
}