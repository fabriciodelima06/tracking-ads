const router = require("express").Router({
    mergeParams: true
});

const controller = require("../controllers/dashboard.controller");

router.get("/summary", controller.summary);

module.exports = router;