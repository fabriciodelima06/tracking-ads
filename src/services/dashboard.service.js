const repository = require("../repositories/dashboard.repository");

async function summary(accountId) {
    return repository.getSummary(accountId);
}

module.exports = {
    summary
};