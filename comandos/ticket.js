module.exports.help = {
    name: "ticket",
    aliases: ["abrir"]
}    
exports.run = async (msg, args) => {
    const discord = require('discord.js')

    let guild = msg.guild
    let find = guild.channels.cache.filter(canal => canal.name === 'ticket-' + msg.author.id)

    if(find.first()) return msg.channel.send(`<a:sim:773627719282851870> | Já tem um ticket abrto!`)

    let channel = await guild.channels.create(`ticket-${msg.author.id}`, { 
        type: 'text', 
        permissionOverwrites: [
            {
                allow: 'VIEW_CHANNEL',
                id: msg.author.id
            },
            {
                deny: 'VIEW_CHANNEL',
                id: msg.guild.id
            }
        ]
    })

    channel.send(new discord.MessageEmbed()
    .setTitle('Atendimento')
    .setColor('GREEN')
    .setDescription(`<a:sim:773627719282851870> | Tira aqui a suas dúvida!`)
    )
}