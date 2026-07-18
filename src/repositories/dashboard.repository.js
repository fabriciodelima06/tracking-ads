const db = require("../config/database");

async function getSummary(accountId) {

    const query = `
        SELECT

            COUNT(*)::int                                    AS events,

            COUNT(*) FILTER (
                WHERE event_name = 'PageView'
            )::int                                           AS pageviews,

            COUNT(*) FILTER (
                WHERE event_name = 'InitiateCheckout'
            )::int                                           AS checkouts,

            COUNT(*) FILTER (
                WHERE event_name = 'Purchase'
            )::int                                           AS purchases,

            COALESCE(
                SUM(value) FILTER (
                    WHERE event_name = 'Purchase'
                ),
                0
            )::numeric                                       AS revenue

        FROM events

        WHERE account_id = $1
    `;

    const { rows } = await db.query(query, [accountId]);

    return rows[0];

}

module.exports = {
    getSummary
};