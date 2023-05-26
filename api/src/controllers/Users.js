const { UserModel } = require("../models")

function getAllUsers (req, res) {
    const userModel = new UserModel();

    userModel.getAll()
        .then(function ([results]) {
            return res.status(200).json(results);
        })
        .catch(function(error){
            return res.sendStatus(500);
        })
}

module.exports={
    getAllUsers
}