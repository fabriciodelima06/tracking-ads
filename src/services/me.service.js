const repository = require("../repositories/me.repository");

async function getMe() {

    const account = await repository.getMe();

    return {
        user: null,
        account
    };

}

module.exports = {
    getMe
};