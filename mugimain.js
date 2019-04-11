const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./mugiapp/config.json", "utf8"));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { // When the bot is ready
    require("./mugiapp/mugi");

    console.log("むぎちゃん起動中"); // Log "Ready!"
});

client.login(config.discord.token);