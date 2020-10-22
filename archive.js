const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'archive',
    description: 'Archive message to separate category after asking user for input',
    execute(message,args){
        
            if(message.member.hasPermission('ADMINISTRATOR')){
            const newHome = args[0]; //Category the channel is moving to
            console.log(message.channel);
            message.channel.setParent(newHome); //Move the channel to new category
            
            console.log(`New parent of ${message.channel.name}: ${newHome}`)
            const hook = new Discord.WebhookClient('webhook id','webhook token'); //Optional Success Logger -- Just fill in the webhook details
            const embed = new Discord.MessageEmbed({
                title: 'Successfully Archived!',
                description: `New parent of <#${message.channel.id}>: <#${newHome.name}>`,
                image: {
                    url: 'https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif'
                },
                timestamp: message.createdAt,
            });
            hook.send(embed);
                
           
            
        }
        else{
            message.channel.send('Nice try :smirk:');
        }
        
    }   
}
