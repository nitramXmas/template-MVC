const BaseController = require("./BaseController");
const { UserModel } = require("../models");

class UserController extends BaseController{


    constructor(req, res){
        super(req, res);
        this.userModel = new UserModel()
    }

    getAll(){
        this.userModel.getAll()
            .then((result) => this.sendJson(result))
    }
}

module.exports UserController;