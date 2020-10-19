const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  name: 'autoarchive',
  description: 'Automatically archives channels based on release date',
  execute(message, args) {
    if(!message.member.hasPermission('ADMINISTRATOR')){ //Check user permissions to make sure user is Administrator
      message.channel.send('Nice try :smirk:');
    }
    else{
      try{
    const oldHome = args[0]; // oldHome is the old category
    const newHome = args[1]; //newHome is the category you're archiving the channels to
      }
      catch(err){
        message.send('Command Failed. Check arguments and try again!');
      }
    
    
    var date = new Date();
    var day = date.getDate();
    // console.log(`Todays date is ${day}`);
    try{
      const guild = message.guild;

      const categoryChannels = guild.channels.cache.filter(channel => channel.type === "text" && channel.parentID === oldHome); //filter all of the channels for only the Release Category (oldHome)
    
    
  
        categoryChannels.forEach(channel =>{ 
        let release_channel = channel.name.split('-'); //Split up channel name 
        
        let month = release_channel[0]; // first element in array release_channel is the month
        let release_day = release_channel[1]; //second element is the day
        let expiration_day = Number(release_day) + 3; //The bot will automatically archive the channel if it is 3 days past the release
        console.log(`Channel: ${channel.name}\nDate of release: ${month}/${release_day}\nArchive Date: ${month}/${expiration_day}\n`)
        if(day>=expiration_day){ //If the current day is greater than or the same as the expiration day, it will archive the channel
          console.log(`Now Archiving ${channel.name}`);
          channel.setParent(newHome); //Moves channel to new category
        }
      
   
    });
  }
  catch(err){
    message.channel.send('Command Failed. Check Arguments and Try Again!');
  }
  }
  
         
   
    

}
}
