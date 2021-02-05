const load = async(path, client) => {
    const {readdirSync} = require('fs')
    readdirSync(path).map((dir) => {
            let pull = require(`../../${path}/${dir}`);
            pull(client)
    })
}
module.exports.Features = load