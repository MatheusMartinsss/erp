const { Int32 } = require("bson");

module.exports = mongoose => {
    var Schema = mongoose.Schema(
        {
            Nome: String,
            Valor: Number,
            Historico: String,
            Documento: Number,
            DataEmissao: {type: Date, default: Date.now},
            DataVencimento: {type: Date, default: Date.now}

        },
        {timestamps: true}
    );

    Schema.method("toJSON", function(){
        const {_v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Contas = mongoose.model('Contas', Schema);
    return Contas;

};