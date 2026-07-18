const { buildMetrics } = require("./metrics.builder");

const { SUMMARY_FIELDS } = require("../constants/dashboard-metrics");

function buildSummary(current, previous) {

    return buildMetrics(
        current,
        previous,
        SUMMARY_FIELDS
    );

}

function buildDashboard(data) {

    return {

        summary: buildSummary(
            data.currentSummary,
            data.previousSummary
        ),
        timeline: data.timeline,
        funnel: data.funnel,
        campaigns: data.campaigns,
        sources: data.sources,
        devices: data.devices,
        countries: data.countries
    };

}

module.exports = {
    buildDashboard,
    buildSummary
};