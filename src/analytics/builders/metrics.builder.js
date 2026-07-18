const { metric } = require("../utils/metrics");

/**
 * Monta um objeto de métricas comparando
 * período atual x período anterior.
 *
 * @param {Object} current
 * @param {Object} previous
 * @param {Array<string|Object>} fields
 */
function buildMetrics(current = {}, previous = {}, fields = []) {

    const result = {};

    for (const field of fields) {

        if (typeof field === "string") {

            result[field] = metric(
                current[field],
                previous[field]
            );

            continue;
        }

        const {
            key,
            currentField,
            previousField
        } = field;

        result[key] = metric(
            current[currentField],
            previous[previousField]
        );

    }

    return result;

}

module.exports = {
    buildMetrics
};