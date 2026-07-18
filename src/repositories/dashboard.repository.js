const db = require("../config/database");

async function getSummary(accountId) {

    const result = await db.query(
        `
        SELECT

            COUNT(*) FILTER(
                WHERE event_name='PageView'
            ) AS pageviews,

            COUNT(*) FILTER(
                WHERE event_name='InitiateCheckout'
            ) AS checkouts,

            COUNT(*) FILTER(
                WHERE event_name='Purchase'
            ) AS purchases,

            COALESCE(
                SUM(value)
                FILTER(
                    WHERE event_name='Purchase'
                ),
                0
            ) AS revenue,

            COUNT(*) AS events

        FROM events
        WHERE account_id=$1
        `,

        [accountId]
    );

    return result.rows[0];

}

module.exports = { getSummary };