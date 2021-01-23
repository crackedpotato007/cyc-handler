const load = async(path, client) => {
    const {readdirSync} = require('fs')
    readdirSync(path).map((dir) => {
        readdirSync(`./${path}/${dir}/`).map((cmd) => {
            let pull = require(`../../${path}/${dir}/${cmd}`);
            client.cmds.set(pull.name, pull);
            console.log(`Loading ${pull.name}`)
            if(pull.aliases) {
                pull.aliases.map((p) => client.aliases.set(p, pull));
            }
        })
    })
}
module.exports.load = load