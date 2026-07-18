const service = require("../services/dashboard.service");

async function summary(req, res) {

    try {

        const { accountId } = req.params;

        const data = await service.summary(accountId);

        return res.json({
            success: true,
            data
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Erro ao carregar dashboard."
        });

    }

}

module.exports = {
    summary
};