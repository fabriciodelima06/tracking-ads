const repository = require("../repositories/dashboard.repository");

async function summary(accountId) {
    return await repository.getSummary(accountId);
}



module.exports = { summary };