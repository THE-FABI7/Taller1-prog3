const controller = require("../controller/logic/phones.controller");
/**Declares the paths and their functionality */
module.exports = (app) => {
    app.get("/phones", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/phones/byMarca/:marca", (req, res, next) => {
        controller.getbyMarca(req, res, next);
    });

    app.post("/phones", (req, res, next) => {
        controller.createPhone(req, res, next);
    });

    app.put("/phones", (req, res, next) => {
        controller.updatePhone(req, res, next);
    });

    app.delete("/phones", (req, res, next) => {
        controller.deletePhone(req, res, next);
    });
};
