function serializeMetric(metric = {}) {
    return {
        value: Number(metric.current || 0),
        previous: Number(metric.previous || 0),
        difference: Number(metric.difference || 0),
        variation: Number(Number(metric.variation || 0).toFixed(2)),
        trend: metric.trend || "neutral"
    };
}


function serializeSummary(summary = {}) {

    const result = {};

    Object.keys(summary).forEach(key => {
        result[key] = serializeMetric(summary[key]);
    });

    return result;
}


function serializeDashboard(data = {}) {
    return {
        summary: serializeSummary(data.summary),
        timeline: data.timeline || [],
        funnel: data.funnel || [],
        campaigns: data.campaigns || [],
        sources: data.sources || [],
        devices: data.devices || [],
        countries: data.countries || []
    };
}


module.exports = {
    serializeDashboard,
    serializeSummary,
    serializeMetric
};