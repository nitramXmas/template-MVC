const { db } = require('../config');//on fait un import

class BaseModel{

    table;
    db;

    constructor(table){
        this.table = table; // déclaré au moment de la création de l'objet
        this.db = db; // fait référence à la db importée
    }

    getAll() {
        return this.db
            .query(`SELECT * FROM ${this.table}`) 
        //Basic request to get everything from the table
    }

    getById(id) {
        return this.db
            .query(`SELECT * FROM ${this.table} WHERE id=?`, [id]) 
        //Request the element by Id
    }

}

module.exports = BaseModel;