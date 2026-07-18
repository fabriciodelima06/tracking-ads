const router = require("express").Router();

const controller = require("../controllers/events.controller");

router.post("/track", controller.track);

module.exports = router;