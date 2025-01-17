var express = require("express");
var router = express.Router();

var card = require("../controllers/CardController.js");

//Gaunamas vardotojo kortu sarasas
router.get("/", card.list);
router.post("/save", card.save);
router.get("/create",card.create);
router.get("/remove/:id",card.remove)
router.get("/edit/:id", card.edit);
router.post("/update/:id", card.update);
module.exports = router;