const express = require("express");

const router = express.Router({ mergeParams: true });

const dashboardController = require("../controllers/dashboard.controller");

router.get("/", dashboardController.getDashboard);

module.exports = router;