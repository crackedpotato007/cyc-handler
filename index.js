const { Client } = require('discord.js')
const {load} = require('cmd-handler/load-commands')
const Discord = require('discord.js')
class newhandler {
    constructor(client, commandpath, eventpath, {prefix}){
        this.commandpath = commandpath
        this.prefix = prefix
        this.client = client
        client.cmds = new Discord.Collection()
        client.aliases = new Discord.Collection()
        load(this.commandpath, client)
        client.on('message', (msg) => {
            const {msgev} = require('./events/message')
            msgev(msg, prefix, client)
        })
    }
}
module.exports.newhandler = newhandler