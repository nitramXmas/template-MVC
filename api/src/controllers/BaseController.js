class BaseController {
    req;
    res;

    constructor(req, res) {
        this.req= req;
        this.res=res;
    }

    senJson(data) {
        this.res.status(200).json(data)
    }
}

module.exports BaseController;