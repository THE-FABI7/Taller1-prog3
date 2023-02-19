// dto
const phonesDto = require("../../model/dto/phones.dto");

exports.createPhone = (req, res, next) => {
  /* Creating a new object with the same name as the properties of the object. */
  let phone = {
    ip: req.body.ip,
    modelo: req.body.modelo,
    marca: req.body.marca,
    año_lanzamiento: req.body.año_lanzamiento,
    almacenamiento: req.body.almacenamiento,
    camara: req.body.camara,
    precio: req.body.precio,
  };

  phonesDto.create(phone, (err, data) => {
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
/**Allows to edit an already existing phone */
exports.updatePhone = (req, res, next) => {
  let phone = {
    ip: req.body.ip,
    modelo: req.body.modelo,
    marca: req.body.marca,
    año_lanzamiento: req.body.año_lanzamiento,
    almacenamiento: req.body.almacenamiento,
    camara: req.body.camara,
    precio: req.body.precio,
  };

  phonesDto.update(phone, (err, data) => {
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
/**Allows to get all the phones in the db */
exports.getAll = (req, res, next) => {
  phonesDto.getAll((err, data) => {
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


/**Allows to get phones filtered by marca */
exports.getbyMarca = (req, res, next) => {
  phonesDto.getbyMarca(req.params.marca, (err, data) => {
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
/**Allows to delete one register from the db */
exports.deletePhone = () => {
  phonesDto.delete({ _ip: req.params.ip }, phone, (err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(204).json();
  });
};
