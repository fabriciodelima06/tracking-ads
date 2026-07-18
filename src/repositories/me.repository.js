const db = require("../config/database");

async function getMe() {

    const result = await db.query(`
        SELECT
            id,
            name,
            company,
            email
        FROM accounts
        ORDER BY created_at
        LIMIT 1
    `);

    return result.rows[0];

}

module.exports = {
    getMe
};