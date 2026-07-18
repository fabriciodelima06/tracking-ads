function buildFilters(filters = {}) {

    const where = [];
    const values = [];
    let index = 1;


    if (filters.accountId) {
        where.push(`account_id = $${index++}`);
        values.push(filters.accountId);
    }

    if (filters.dateField && filters.from) {
        where.push(`${filters.dateField} >= $${index++}`);
        values.push(filters.from);
    }

    if (filters.dateField && filters.to) {
        const endDate = new Date(filters.to);
        endDate.setHours(23, 59, 59, 999);
        where.push(`${filters.dateField} <= $${index++}`);
        values.push(endDate);
    }

    return {
        where,
        values
    };

}

module.exports = {
    buildFilters
};