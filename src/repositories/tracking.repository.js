const db = require("../config/database");

async function findByTrackingKey(trackingKey) {

    const result = await db.query(
        `
        SELECT tk.*, td.domain
        FROM tracking_keys tk
        LEFT JOIN tracking_domains td ON td.id = tk.domain_id
        WHERE tk.tracking_key = $1 AND tk.status = 'active'
        LIMIT 1
        `,
        [trackingKey]
    );

    return result.rows[0];
}


module.exports = { findByTrackingKey };