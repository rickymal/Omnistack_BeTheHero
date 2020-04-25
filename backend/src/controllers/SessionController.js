const connection = require('../database/connections')

module.exports = {
    async create (request,response) {
        console.log("OI")
        const {id} = request.body
        console.log("Mostrando o ID")
        if(id == undefined){
            console.log("Não foi possível completar a criação, id não definido");
            return response.json({})
        }
        console.log(id)
        const ong = await connection('ongs')
        .where('id',id)
        .select('name')
        .first();

        if (!ong) {
            return response.status(400).json({
                error : 'no Ong found'
            })
        }

        return response.json(ong)

    }
}