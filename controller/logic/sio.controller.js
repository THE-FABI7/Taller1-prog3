// dto
const sioDto = require("../../model/dto/sio.dto");

/* A function that creates a new object in the database. */
exports.createSio = (req, res, next) => {
  let sio = {
    nombre: req.body.nombre,
    version: req.body.version,
    fecha_creacion: req.body.fecha_creacion,
    navegador: req.body.navegador,
  };

  sioDto.create(sio, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(201).json({
      info: data,
    });
  });
};

/* A function that updates an object in the database. */
exports.updateSio = (req, res, next) => {
  let sio = {
    nombre: req.body.nombre,
    version: req.body.version,
    fecha_creacion: req.body.fecha_creacion,
    navegador: req.body.navegador,
  };

  sioDto.update({ _version: req.params.version }, sio, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(201).json({
      info: data,
    });
  });
};

/* A function that returns all the objects in the database. */
exports.getAll = (req, res, next) => {
  sioDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      info: data,
    });
  });
};


/* A function that returns objects by name in the database. */
exports.getbynombre = (req, res, next) => {
    sioDto.getbynombre({ nombre: req.params.nombre }, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        info: data,
      });
    });
}

/* A function that deletes an object in the database. */
exports.deleteSio = () => {
    sioDto.delete({version: req.params.version}, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(204).json()
    });
}