const { variation } = require("./percentage");

function toNumber(value) {
    if (value === null || value === undefined) {
        return 0;
    }
    return Number(value);
}

function metric(current, previous) {

    current = toNumber(current);
    previous = toNumber(previous);

    return {
        current,
        previous,
        variation: variation(current, previous),
        difference: current - previous,
        trend: current >= previous ? "up" : "down"
    };

}

module.exports = {
    metric
};