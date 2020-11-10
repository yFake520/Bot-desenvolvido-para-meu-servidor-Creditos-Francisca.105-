module.exports.help = {
    name: "kick",
    aliases: ["kickar"]
}    
exports.run = async (msg, args) => {
    if(!msg.member.permissions.has('KICK_MEMBERS')) return msg.channel.send(`${msg.author.username},<a:Nao:773627754469785620> | não tem permissão para executar este comando!`)
    if(!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.channel.send(`<a:Nao:773627754469785620> | Não tenho permissão para executar esse comando!`)

    let punir = msg.mentions.members.first()

    if(!punir) return msg.channel.send(`<a:Nao:773627754469785620> | Tem que mencionar a pessoa que você quer kickar!`)

    if(punir.user.id === msg.guild.ownerID) return msg.channel.send(`<a:Nao:773627754469785620> | Não pode kickar o dono do servidor!`)
    if(punir.user.id === msg.author.id) return msg.channel.send(`<a:Nao:773627754469785620> | Não pode se auto kickar`)
    if(!punir.kickable) return msg.channel.send(`<a:Nao:773627754469785620> | Não posso kickar esse membro!`)

    punir.kick({reason: args.slice(1).join(' ') || 'Desconhecido.'})
    msg.channel.send(`<a:sim:773627719282851870> | ${punir.user.username} kickado com sucesso!`)
}