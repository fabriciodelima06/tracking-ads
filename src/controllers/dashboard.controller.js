const service = require("../services/dashboard.service");

async function summary(req, res) {
    try {
        const data = await service.summary(req.query.account_id);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Erro ao buscar dashboard"
        });
    }
}

module.exports = { summary };