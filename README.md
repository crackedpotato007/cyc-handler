# INSTALLATION
For installing cychandler run the following command!
```npm i cychandler```

 # Support

 Join my discord from [this](https://discord.gg/djrjWh2YsM) link or make a issue at the github repository [here](https://github.com/arnav7633/cyc-handler/issues)
# Usage

**Initialization**
cychandler can be initialized using simple arguments and code you will be needing a mongodb connection string
```
const discord = require('discord.js') // Requiring Discorrd.js in our project
const Client = new discord.Client({ws: {intents: discord.Intents.ALL}}) // We need to enable the intents to actually reacive the data when someone joins
const handler = require('cychandler')

Client.on('ready', () => {  // This is triggered when the bot is online
console.log('Ready to serve') // This is logged
const hand = new handler(Client, 'commands', './events', {"prefix": "!"})
.setmongopath("Your mongodb path)

.setOwnerid('Your id')
})
```

**Making commands**
cychandler uses a simple yet effective method for commands as given below
the command path should be like `./commands/general/hello.js`
```
module.exports = {
    name: 'hello',
    expectedArgs: 1,
    usage: '(commandname)',
    ownerOnly: false,
    aliases: ['hi']
    run: (client, message, argsArray, ArgsString) => {
        console.log(args)
        message.reply('Hey!')
    }
}
```
The above format should be followed when making a command, 
name - The name of the command

ExpectedArgs - The number of arguments expected after the command -1 represents infinite

usage - The usage of the command with the command name and expected args

Owneronly - If this command is locked to the owner only 

aliases - This property is used to assign other words which will trigger this command it is an array

**Events**

To make regular discord.js events or other features use the format given below
```
module.exports = (client) => {
    client.on('message', (msg) => { // The event you wanna listen to
        //Your code
    })
}
```