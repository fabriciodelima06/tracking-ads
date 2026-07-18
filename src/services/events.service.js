const repository = require("../repositories/events.repository");
const trackingRepository = require("../repositories/tracking.repository");
const attributionRepository = require("../repositories/attribution.repository");

const crypto = require("crypto");

async function trackEvent(payload) {

    const tracking = await trackingRepository.findByTrackingKey(payload.tracking_key);

    if (!tracking) {
        throw new Error("Tracking key inválida");
    }

    const eventId = payload.event_id || crypto.randomUUID();

    const event = await repository.createEvent({
        account_id: tracking.account_id,
        tracking_key_id: tracking.id,
        event_id: eventId,
        event_name: payload.event_name,
        event_time: payload.event_time || new Date(),
        source_url: payload.source_url,
        client_ip: payload.client_ip,
        user_agent: payload.user_agent,

        fbp: payload.fbp,
        fbc: payload.fbc,
        fbclid: payload.fbclid,

        gclid: payload.gclid,
        gbraid: payload.gbraid,
        wbraid: payload.wbraid,

        utm_source: payload.utm_source,
        utm_medium: payload.utm_medium,
        utm_campaign: payload.utm_campaign,
        utm_content: payload.utm_content,
        utm_term: payload.utm_term,

        value: payload.value,
        currency: payload.currency,

        payload

    });

    await repository.createPipeline(event.id);

    await attributionRepository.createAttribution({
        event_id: event.id,

        source: payload.utm_source,
        medium: payload.utm_medium,
        campaign: payload.utm_campaign,
        content: payload.utm_content,
        term: payload.utm_term,

        fbclid: payload.fbclid,
        fbp: payload.fbp,
        fbc: payload.fbc,

        gclid: payload.gclid,
        gbraid: payload.gbraid,
        wbraid: payload.wbraid,

        landing_page: payload.source_url,
        referrer: payload.referrer
    });

    return event;

}

module.exports = { trackEvent };