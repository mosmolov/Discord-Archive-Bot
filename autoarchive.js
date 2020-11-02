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
      
      
    
    
    var date = new Date();
    var day = date.getDate();
    // console.log(`Todays date is ${day}`);
    
      const guild = message.guild;

      const categoryChannels = guild.channels.cache.filter(channel => channel.type === "text" && channel.parentID === oldHome); //filter all of the channels for only the Release Category (oldHome)
        
    
  
        categoryChannels.forEach(channel =>{ 
        let release_channel = channel.name.split('-'); //Split up channel name 
        
        let month = release_channel[0]; // first element in array release_channel is the month
        let release_day = release_channel[1]; //second element is the day
        let expiration_day = Number(release_day) + 2; //The bot will automatically archive the channel if it is 3 days past the release
        let current_day = date.getDay()+1;
        let current_month = date.getMonth()+1;
        let days_of_month = {
          1: "31",
          2: "28",
          3: "31",
          4: "30",
          5: "31",
          6: "30",
          7: "31",
          8: "31",
          9: "30",
          10: "31",
          11: "30",
          12: "31"
        }
        if(expiration_day > days_of_month.current_month){
          expiration_day -= days_of_month.current_month;
        }
        
        console.log(`Channel: ${channel.name}\nDate of release: ${month}/${release_day}\nArchive Date: ${month}/${expiration_day}\n`)
        if(day>=expiration_day || current_month>month){ //If the current day is greater than or the same as the expiration day, it will archive the channel
          console.log(`Now Archiving ${channel.name}`);
          channel.setParent(newHome); //Moves channel to new category
          //https://discord.com/api/webhooks/731201983746408538/LpIJMRB7utuaLiO86OwjCg1U9GCU2JKLWeHF6VXzKRii39GptcF6IvCHKi6nzkgN0ovD
          const hook = new Discord.WebhookClient('731201983746408538','LpIJMRB7utuaLiO86OwjCg1U9GCU2JKLWeHF6VXzKRii39GptcF6IvCHKi6nzkgN0ovD');
          const embed = new Discord.MessageEmbed({
                title: 'Successfully Archived!',
                description: `New parent of <#${channel.id}>: <#${newHome.name}>`,
                image: {
                    url: 'https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif'
                },
                timestamp: message.createdAt,
            });
          hook.send(embed);
        }
      
   
    });
  }

  catch(err){
    message.channel.send('Command Failed. Check Arguments and Try Again!');
  }
  }
  
         
   
    

}
}
