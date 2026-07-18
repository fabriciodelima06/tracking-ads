const service = require("../services/me.service");

async function getMe(req, res) {

    try {

        const data = await service.getMe();

        return res.json({
            success: true,
            data
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Erro ao buscar informações."
        });

    }

}

module.exports = {
    getMe
};