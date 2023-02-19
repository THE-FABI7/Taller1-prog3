const controller = require("../controller/logic/sio.controller");

module.exports = (app) => {
    app.get("/sio", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/sio/bynombre/:nombre", (req, res, next) => {
        controller.getbynombre(req, res, next);
    });

    app.post("/sio", (req, res, next) => {
        controller.createSio(req, res, next);
    });

    app.put("/sio", (req, res, next) => {
        controller.updateSio(req, res, next);
    });

    app.delete("/sio", (req, res, next) => {
        controller.deleteSio(req, res, next);
    });
};
