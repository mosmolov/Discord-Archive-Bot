const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('node-cron');
module.exports = {
  name: 'autoarchive',
  description: 'Automatically archives channels based on release date',
  execute(message, args) {

    const oldHome = args[0]; // oldHome is the old category
    const newHome = args[1]; //newHome is the category you're archiving the channels to

    const guild = message.guild;
    const categoryChannels = guild.channels.cache.filter(channel => channel.type === "text" && channel.parentID === oldHome); //filter all of the channels for only the Release Category (oldHome)
    console.log(`Category: ${oldHome}`);
    const release_category = []
    
    console.log(`Number of Channels: ${oldHome}`);
    categoryChannels.forEach(channel => {
        release_category.push(channel.name);
    });
    console.log(release_category);
    for(var i=0;i<release_category.length;i++){
        
      let release_channel = release_category[i].split('-'); //split channel name delimited by '-' 
      console.log(release_channel);
      const month = release_channel[0]; // first element in array release_channel is the month
      const day = release_channel[1]; //second element is the day
      const expiration_day = Number(day) + 5; //The bot will automatically archive the channel if it is 5 days past the release
      console.log(`Channel: ${categoryChannels[i].name}\nDate of release: ${month}/${day}\nDate Archived: ${month}/${expiration_day}\n`);
      var date = new Date();
      if(expiration_day==date.getDay()){
        categoryChannels[i].name.setParent(newHome);
      }
      else{
        return;
      }
      
      
      console.log(`Now Archiving ${release_category[i].name}`);
      
      console.log(`New parent of ${release_category[i].name}: "${newHome}"`)
      /*https://discordapp.com/api/webhooks/765543180178292786/GwWUIOuYGMm_dQlQ5Ex4IGFmoZODB0m5888RQ4XFmIKAGKWgzLYubjpqKEEXLI7GVPU2*/
      const hook = new Discord.WebhookClient('765543180178292786', 'GwWUIOuYGMm_dQlQ5Ex4IGFmoZODB0m5888RQ4XFmIKAGKWgzLYubjpqKEEXLI7GVPU2');
      const embed = new Discord.MessageEmbed({
        title: 'Successfully Archived!',
        description: `New parent of #${release_category[i]}: <#${newHome}>`,
        image: {
          url: 'https://i.pinimg.com/originals/7b/a4/ef/7ba4ef400a13a91e7967a3f6e5c6b528.jpg'
        },
        timestamp: message.createdAt,

      });
      
}
    

    
  }
}
