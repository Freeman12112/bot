const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const client = new Discord.Client();
const Bot = new Discord.Client();
const token = "<auth_token>" // Recommended to load from json file.

client.on('ready', () => {
    console.log('I am ready!');
});

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

music(Bot, {
	prefix: '!',       // Prefix of '!'.
	global: false,     // Server-specific queues.
	maxQueueSize: 10,  // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: 'music'   // Name of voice channel to join. If omitted, will instead join user's voice channel.
});

// THIS  MUST  BE  THIS  WAY
Bot.login(token);
client.login(process.env.BOT_TOKEN);
