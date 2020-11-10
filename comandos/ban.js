module.exports.help = {
    name: "ban",
    aliases: ["banir"]
}    
exports.run = async (msg, args) => {
    if(!msg.member.permissions.has('BAN_MEMBERS')) return msg.channel.send(`${msg.author.username},<a:Nao:773627754469785620> | não tens permissão para executar este comando!`)
    if(!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.channel.send(`<a:Nao:773627754469785620> | Não tenho permissão para executar esse comando!`)

    let punir = msg.mentions.members.first()

    if(!punir) return msg.channel.send(`Tens de mencionar a pessoa que queres banir!`)

    if(punir.user.id === msg.guild.ownerID) return msg.channel.send(`<a:Nao:773627754469785620> | Não pode banir o dono do servidor!`)
    if(punir.user.id === msg.author.id) return msg.channel.send(`<a:Nao:773627754469785620> | Não pode se auto banir`)
    if(!punir.bannable) return msg.channel.send(`<a:Nao:773627754469785620> | Não posso banir esse membro!`)

    punir.ban({reason: args.slice(1).join(' ') || 'Desconhecido.'})
    msg.channel.send(`<a:sim:773627719282851870> | ${punir.user.username} banido com sucesso!`)
}