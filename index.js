const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';
const fs = require('fs');
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file=> file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('I am Online!');
})

client.on('message',message=>{
    if(!message.content.startsWith(prefix)|| message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command==='archive'){
        client.commands.get('archive').execute(message, args);
    }
    if(command==='autoarchive'){
        client.commands.get('autoarchive').execute(message, args);
    }
    if(command==='categorychannels'){
        client.commands.get('categorychannels').execute(message, args);
    }
    if(command==='help'){
        client.commands.get('help').execute(message, args);
    }
});

client.login('insert token here');
