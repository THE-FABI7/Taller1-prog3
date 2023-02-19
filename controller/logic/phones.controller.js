// dto
const phonesDto = require("../../model/dto/phones.dto");

exports.createPhone = (req, res, next) => {
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
