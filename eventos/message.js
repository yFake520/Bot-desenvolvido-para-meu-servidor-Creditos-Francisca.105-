const fs = require('fs')
const {bot} = require('../index');
const discord = require('discord.js');
const config = require('../config.json')

bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;
  
  let prefixo = config.prefixo;

    let args = message.content.slice(prefixo.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefixo)) return;

    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))

    if(commandfile) {

      commandfile.run(message, args)

      setTimeout(()=> {
        message.delete()
      }, 15 * 1000)
    }


})