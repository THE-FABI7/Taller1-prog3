// packages
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

// app configuration
const app = express();

/** creation of JSON parser  */
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
    extended: true,
});

/** use of JSON parser  */
app.use(jsonParser);
app.use(urlEncodedParser);

const controller = require("./controller/logic/phones.controller");
const controllersio = require("./controller/logic/sio.controller");
// port configuration
const port = config.get("server-port");

app.get("/", (req, res) => {
    res.send("api rest of cell phones and operating systems");
});

app.get("/phones", (req, res) => {
    controller.getAll(req, res);
});

// phones routes loading
let phonesRoutes = require("./routes/phones.routes");
phonesRoutes(app);

// sio routes loading
let sioRoutes = require("./routes/sio.routes");
sioRoutes(app);

app.listen(port, () => {
    console.log("listening on port " + port);
});
