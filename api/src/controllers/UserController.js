const BaseController = require("./BaseController");
const UserModel = require("../models/UserModel")

class UserController extends BaseController{


    constructor(req, res){
        super(req, res);
        this.userModel = new UserModel()
    }
}

module.exports UserController;