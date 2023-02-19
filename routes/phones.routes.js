const controller = require("../controller/logic/phones.controller");

module.exports = (app) => {
    app.get("/phones", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/phones/bydocument/:document", (req, res, next) => {
        controller.getByDocument(req, res, next);
    });

    app.post("/phones", (req, res, next) => {
        controller.createPhones(req, res, next);
    });

    app.put("/phones", (req, res, next) => {
        controller.updatePhones(req, res, next);
    });

    app.delete("/phones", (req, res, next) => {
        controller.deletePhones(req, res, next);
    });
};
