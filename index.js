const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';
const { bottoken } = require('./config.json');
client.once('ready', () => {
    console.log('I am Online!');
})

client.on('message', message => {
    if(!message.content.startsWith(prefix)) return;
    if(!message.member.hasPermission('ADMINISTRATOR')) message.channel.send('Must be Administrator!');
    var args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'autoarchive'){
        const { autoarchive } = require('./commands/autoarchive');
        autoarchive(message,args);
    }
    if(command === 'help'){
        const { help } = require('./commands/help');
        help(message);
    }
    if(command === 'archive'){
        const { archive } = require('./commands/archive');
        archive(message, args);
    }
});


client.login(bottoken);
