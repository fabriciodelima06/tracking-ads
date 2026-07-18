function variation(current, previous) {

    current = Number(current) || 0;
    previous = Number(previous) || 0;

    if (previous === 0) {
        if (current === 0) return 0;
        return 100;
    }

    return Number(((current - previous) / previous) * 100);

}

module.exports = {
    variation
}