const db = require("../../config/database");

const { buildQuery } = require("../query/query.builder");
const { buildFilters } = require("../query/filters.builder");
const { summarySelect } = require("../sql/dashboard/summary.sql");

async function getSummary(accountId, from, to) {

    const { where, values } = buildFilters({ accountId, from, to, dateField: "event_time" });

    const query = buildQuery({
        table: "events",
        select: summarySelect(),
        where,
        values
    });

    const { rows } = await db.query(
        query.text,
        query.values
    );

    return rows[0];

}

async function getTimeline() {
    return [];
}

async function getFunnel() {
    return [];
}

async function getCampaigns() {
    return [];
}

async function getSources() {
    return [];
}

async function getDevices() {
    return [];
}

async function getCountries() {
    return [];
}

module.exports = {
    getSummary,
    getTimeline,
    getFunnel,
    getCampaigns,
    getSources,
    getDevices,
    getCountries
};