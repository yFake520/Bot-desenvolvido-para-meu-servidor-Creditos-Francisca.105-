const {bot} = require('../index');

bot.on("ready", async () => {
    console.log(`${bot.user.username} (${bot.user.id}) está online.`)

    await bot.user.setActivity("a trabalhar!")
    bot.user.setActivity('SkyIce!')
})