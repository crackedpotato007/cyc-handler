const msg = async(message, prefix, client) => {
if(!message.content.startsWith(prefix)) return
if(!message.guild) return
if(message.author.bot) return
const args = message.content.slice(prefix.length).trim().split(/ + /g)
const cmd = args.shift().toLowerCase()
const command = client.cmds.get(cmd) || client.aliases.get(cmd)
if(command) {
    command.run(client, message, args)
}
}