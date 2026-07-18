const router = require("express").Router();

const accountsController = require("../controllers/accounts.controller");

const dashboardRoutes = require("./dashboard.routes");
const eventsRoutes = require("./events.routes");

// Contas
router.get("/", accountsController.list);
router.get("/:accountId", accountsController.get);

// Recursos da conta
router.use("/:accountId/dashboard", dashboardRoutes);
router.use("/:accountId/events", eventsRoutes);

module.exports = router;