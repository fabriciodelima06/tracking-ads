require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const eventsRoutes = require("./routes/events.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({ status: "online", service: "tracking-api", version: "1.0" });
});

app.use("/events", eventsRoutes);
app.use("/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});