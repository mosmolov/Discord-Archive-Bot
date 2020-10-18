const Discord = require('discord.js');
const client = new Discord.Client();
const prompt = require('prompt-sync')();


module.exports = {
    name: 'archive',
    description: 'Archive message to separate category after asking user for input',
    execute(message,args){
        
            
            const newHome = args[0];
            console.log(message.channel);
            message.channel.setParent(newHome);
            
            console.log(`New parent of ${message.channel.name}: ${newHome}`)
            /*https://discordapp.com/api/webhooks/765543180178292786/GwWUIOuYGMm_dQlQ5Ex4IGFmoZODB0m5888RQ4XFmIKAGKWgzLYubjpqKEEXLI7GVPU2*/
            const hook = new Discord.WebhookClient('765543180178292786','GwWUIOuYGMm_dQlQ5Ex4IGFmoZODB0m5888RQ4XFmIKAGKWgzLYubjpqKEEXLI7GVPU2');
            const embed = new Discord.MessageEmbed({
                title: 'Successfully Archived!',
                description: `New parent of #${message.channel.name}: <#${newHome}>`,
                image: {
                    url: 'https://i.pinimg.com/originals/7b/a4/ef/7ba4ef400a13a91e7967a3f6e5c6b528.jpg'
                },
                timestamp: message.createdAt,
            });
            hook.send(embed);
                
           
            
            
        
    }   
}