class BaseModel{

    table;

    constructor(table){
        this.table =table;
    }

    getAll() {
        return `SELECT * FROM ${this.table}` 
        //Basic request to get everything from the table
    }

    getById() {
        return `SELECT * FROM ${this.table} WHERE id=?` 
        //Request the element by Id
    }

}