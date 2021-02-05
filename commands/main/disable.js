const schema = require('../../models/disabled-commands')
module.exports ={
    name: 'command',
    permission: 'ADMINISTRATOR',
    expectedArgs: 2,
    run: async(client, message, args) => {
        console.log(args[1])
if(!['off','on'].includes(args[1])){
    return message.reply('The last argument should be on/off')
}
const command = client.cmds.get(args[0])
if(!command){
    return message.reply('Not a valid command!')
}
let data = await schema.findOne({guildid: message.guild.id})
if(data){
    if(args[1] === 'off'){
    if(data.commands.includes(args[0])){
        return message.reply('Command is already disabled')
    }
}
if(args[1] === 'on'){
    if(!data.commands.includes(args[0])){
        message.reply('Command is already enabled')
    }
}
}

if(args[1] === 'off'){
    await schema.findOneAndUpdate({guildid: message.guild.id}, {$push: {
    commands: command.name
}}, {upsert: true})
message.reply(`The command has been turned ${args[1]}`)
    }
    if(args[1] === 'on'){
        await schema.findOneAndUpdate({guildid: message.guild.id}, {$pull: {
        commands: command.name
    }}, {upsert: false})
    message.reply(`The command has been turned ${args[1]}`)
        }
    }
}