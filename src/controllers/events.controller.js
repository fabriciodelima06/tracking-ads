const service = require("../services/events.service");


async function track(req, res) {
    try {
        const event = await service.trackEvent(req.body);

        res.status(201).json({
            success: true,
            event_id: event.event_id,
            id: event.id
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Erro ao registrar evento"
        });

    }

}

module.exports = { track };