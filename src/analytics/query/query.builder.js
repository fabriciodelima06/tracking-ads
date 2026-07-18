function buildQuery({
    table,
    select = "*",
    joins = [],
    where = [],
    groupBy = [],
    having = [],
    orderBy = [],
    limit,
    offset,
    values = []
}) {

    const sql = [];

    sql.push(`SELECT ${select}`);
    sql.push(`FROM ${table}`);

    joins.forEach(join => { sql.push(join); });

    if (where.length) sql.push(`WHERE ${where.join(" AND ")}`);
    if (groupBy.length) sql.push(`GROUP BY ${groupBy.join(", ")}`);
    if (having.length) sql.push(`HAVING ${having.join(" AND ")}`);
    if (orderBy.length) sql.push(`ORDER BY ${orderBy.join(", ")}`);
    if (limit) sql.push(`LIMIT ${limit}`);
    if (offset) sql.push(`OFFSET ${offset}`);

    return {
        text: sql.join("\n"),
        values
    };
}

module.exports = {
    buildQuery
};