const dashboardService = require("../services/dashboard.service");

async function getDashboard(req, res) {

    try {
        const { accountId } = req.params;

        const { from, to } = req.query;


        if (!accountId) {
            return res.status(400).json({
                success: false,
                message: "Account ID obrigatório."
            });
        }

        if (!from || !to) {
            return res.status(400).json({
                success: false,
                message: "Período inicial e final são obrigatórios."
            });
        }

        const dashboard = await dashboardService.getDashboard(accountId, from, to);

        return res.json({
            success: true,
            data: dashboard
        });

    } catch (error) {
        console.error(
            "Dashboard Controller Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Erro ao carregar dashboard."
        });

    }
}


module.exports = {
    getDashboard
};