const {load} = require('cmd-handler/load-commands')
const Discord = require('discord.js')
const {connect} = require('./mongo')
const {Features} = require('./EventHandler')
class newhandler {
    constructor(client, commandpath, eventpath, {prefix}){
        this.eventpath = eventpath
        this.commandpath = commandpath
        this.prefix = prefix
        this.client = client

        client.cmds = new Discord.Collection()
        client.aliases = new Discord.Collection()

        load(this.commandpath, client)
        Features(eventpath, client)
        let pull1 = require('./commands/main/disable')
        client.cmds.set(pull1.name, pull1)

        client.on('message', (msg) => {
            const {msgev} = require('./events/message')
            msgev(msg, prefix, client, this.owner)
        })
    }

    setmongopath(path){
        this.mongo = path
        connect(this.mongo)
        console.log('Connected to database')
        return this

    }

    setOwnerid(id){
        this.owner = id
        return this
    }
}
module.exports = newhandler
