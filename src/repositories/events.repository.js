const db = require("../config/database");

async function createEvent(data) {

    const query = `

        INSERT INTO events (
            account_id, tracking_key_id, event_id, event_name, event_time,
            source_url, client_ip, user_agent,
            fbp, fbc, fbclid,
            gclid, gbraid, wbraid,
            utm_source, utm_medium, utm_campaign, utm_content, utm_term,
            value, currency,
            payload
        )
        VALUES (
            $1,$2,$3,$4,$5,
            $6,$7,$8,
            $9,$10,$11,
            $12,$13,$14,
            $15,$16,$17,$18,$19,
            $20,$21,
            $22
        )
        RETURNING *
    `;

    const values = [
        data.account_id,
        data.tracking_key_id,

        data.event_id,
        data.event_name,
        data.event_time,

        data.source_url,
        data.client_ip,
        data.user_agent,

        data.fbp,
        data.fbc,
        data.fbclid,

        data.gclid,
        data.gbraid,
        data.wbraid,

        data.utm_source,
        data.utm_medium,

        data.utm_campaign,
        data.utm_content,
        data.utm_term,

        data.value,
        data.currency,

        data.payload

    ];


    const result = await db.query(query, values);

    return result.rows[0];

}



async function createPipeline(eventId) {
    const steps = [
        {
            step: "RECEIVED",
            status: "SUCCESS",
            message: "Evento recebido pelo endpoint"
        },
        {
            step: "PERSISTED",
            status: "SUCCESS",
            message: "Evento salvo no PostgreSQL"
        }

    ];

    for (const item of steps) {

        await db.query(
            `
            INSERT INTO event_pipeline
            (
                event_id,
                step,
                status,
                message
            )
            VALUES($1,$2,$3,$4)
            `,

            [
                eventId,
                item.step,
                item.status,
                item.message
            ]

        );
    }

}

module.exports = {
    createEvent,
    createPipeline
};