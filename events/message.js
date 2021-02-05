const disabled_commands = require('../models/disabled-commands')

const msg = async(message, prefix, client, owner) => {

if(!message.content.startsWith(prefix)) return
if(!message.guild) return
if(message.author.bot) return

const args = message.content.slice(prefix.length).trim().split(/ +/g)
const cmd = args.shift().toLowerCase()
const command = client.cmds.get(cmd) || client.aliases.get(cmd)
let guilddata = await disabled_commands.findOne({guildid: message.guild.id})

if(!command) return

if(command.permission){ // permissions
if(!message.member.hasPermission(command.permission)){
return message.reply('You do not have correct permission to use this command!')
}
}

if(command.expectedArgs){ //arg handling
    if(args.length !== command.expectedArgs){
        return message.reply(`Incorrect usage! the correct usage is ${command.usage}`)
    }
}
if(guilddata){
if(guilddata.commands.includes(command.name)){ // Per guild commands
    return message.reply(`This command has been disabled in this guild`)
}
}

if(command.ownerOnly === true){
if(message.author.id !== owner){
    return message.reply('This command is owner only!')
}
}

    command.run(client, message, args, args.join(" "))
}
module.exports.msgev = msg