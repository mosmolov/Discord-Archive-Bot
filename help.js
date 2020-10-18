const Discord = require('discord.js')
module.exports={
    name: 'help',
    description: 'Displays prefix, commands, and how to use the bot',
    execute(message, args){
        
        const embed = new Discord.MessageEmbed({
            title: '__Archive Bot__',
            description: ' **Prefix:**   `*`\n\n**Commands:**\n\n`*help` \nDisplays this message\n\n`*archive <Category ID>` \nArchives the channel the command is used in to the specified category\n\n`*autoarchive <Old Category ID> <New Category ID>` \nAutomatically determines the date of the release in each channel and archives releases which are 3 days or older \n\n',
            color: '#f1f1f1',
            footer: {
                text: 'Made by mozzy#1000',
                icon_url: 'https://pbs.twimg.com/profile_images/458336636011421696/E39utm1d_400x400.png'
            }
        })
        message.channel.send(embed);
    }
}