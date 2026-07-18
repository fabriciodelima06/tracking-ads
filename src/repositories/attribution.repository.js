const db = require("../config/database");

async function createAttribution(data) {

    const query = `
        INSERT INTO event_attribution
        (
            event_id, source, medium, campaign, content, term,
            fbclid, fbp, fbc,
            gclid, gbraid, wbraid,
            landing_page, referrer
        )
        VALUES
        (
            $1,$2,$3,$4,$5,$6,
            $7,$8,$9,
            $10,$11,$12,
            $13,$14
        )
        RETURNING *
    `;


    const values = [
        data.event_id,
        data.source,
        data.medium,
        data.campaign,
        data.content,
        data.term,

        data.fbclid,
        data.fbp,
        data.fbc,

        data.gclid,
        data.gbraid,
        data.wbraid,

        data.landing_page,
        data.referrer
    ];

    const result = await db.query(
        query,
        values
    );

    return result.rows[0];

}

module.exports = {
    createAttribution
};