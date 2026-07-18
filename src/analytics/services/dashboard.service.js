const repository = require("../repositories/dashboard.repository");

const { getPreviousPeriod } = require("../utils/date-range");
const { buildDashboard } = require("../builders/dashboard.builder");
const { serializeDashboard } = require("../serializers/dashboard.serializer");

async function getDashboard(accountId, from, to) {

    const previous = getPreviousPeriod(from, to);

    console.log({
        current: {
            from,
            to
        },
        previous
    });

    const currentSummary = await repository.getSummary(
        accountId,
        from,
        to
    );

    const previousSummary = await repository.getSummary(
        accountId,
        previous.from,
        previous.to
    );

    const dashboard = buildDashboard({
        currentSummary,
        previousSummary,
        timeline: [],
        funnel: [],
        campaigns: [],
        sources: [],
        devices: [],
        countries: []
    });

    return serializeDashboard(dashboard);

}

module.exports = {
    getDashboard
};