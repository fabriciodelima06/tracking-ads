const service = require("../services/accounts.service");

async function list(req, res) {
    const accounts = await service.list();

    res.json({
        success: true,
        data: accounts
    });
}

async function get(req, res) {
    const account = await service.get(req.params.id);

    if (!account) {
        return res.status(404).json({
            success: false,
            message: "Conta não encontrada"
        });
    }

    res.json({
        success: true,
        data: account
    });
}

module.exports = {
    list,
    get
};