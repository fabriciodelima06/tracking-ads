const router = require("express").Router();

const controller = require("../controllers/me.controller");

router.get("/", controller.getMe);

module.exports = router;