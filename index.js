const { Client, Collection } = require("discord.js");
const discord = require("discord.js");
const { token } = require("./config.json");
const bot = new discord.Client();
const fs = require("fs");


    fs.readdir("./eventos/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("Não existem eventos para carregar.");
        console.log(`\nA carregar ${jsfiles.length} eventos...`);
        jsfiles.forEach((f, i) => {
            require(`./eventos/${f}`);
            console.log(`${i + 1}: ${f} carregado!`);
        });
    });

    fs.readdir("./comandos/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");

        if (jsfiles.length <= 0) return console.log("Não existem comandos para carregar.");

        console.log(`\nA carregar ${jsfiles.length} comandos...`);
        jsfiles.forEach((f, i) => {
            let props = require(`./comandos/${f}`);
            console.log(`${i + 1}: ${f} carregado!`);
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            });
        });
    });
    
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;

bot.login(token)