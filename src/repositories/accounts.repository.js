const db = require("../config/database");

async function findAll() {
    const result = await db.query(`
        SELECT
            id,
            name,
            email,
            company,
            status,
            created_at
        FROM accounts
        ORDER BY name
    `);

    return result.rows;
}

async function findById(id) {
    const result = await db.query(
        `
        SELECT *
        FROM accounts
        WHERE id = $1
        LIMIT 1
        `,
        [id]
    );

    return result.rows[0];
}

module.exports = {
    findAll,
    findById
};