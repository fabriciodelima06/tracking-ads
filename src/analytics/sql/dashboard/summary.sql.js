const EVENTS = require("../../../constants/events");

function summarySelect() {

    return `

        COUNT(*)::int AS events,

        COUNT(*) FILTER (
            WHERE event_name = '${EVENTS.PAGE_VIEW}'
        )::int AS pageviews,

        COUNT(*) FILTER (
            WHERE event_name = '${EVENTS.INITIATE_CHECKOUT}'
        )::int AS checkouts,

        COUNT(*) FILTER (
            WHERE event_name = '${EVENTS.PURCHASE}'
        )::int AS purchases,

        COALESCE(

            SUM(value) FILTER (
                WHERE event_name='${EVENTS.PURCHASE}'
            ),

            0

        )::numeric AS revenue

    `;

}

module.exports = {
    summarySelect
};