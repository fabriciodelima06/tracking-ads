const repository = require("../repositories/accounts.repository");

async function list() {
    return repository.findAll();
}

async function get(id) {
    return repository.findById(id);
}

module.exports = {
    list,
    get
};