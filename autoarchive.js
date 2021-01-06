function autoarchive(message,args){
    const oldHome = args[0];
    const newHome = args[1];
    const guild = message.guild;
    var date = new Date();
    var daysOfMonth = require('../days.json');
    const releaseChannels = guild.channels.cache.filter(channel => channel.type == 'text' && channel.parentID == oldHome);
    releaseChannels.forEach(channel => {
        var channelarray = channel.name.split('-');
        var releaseMonth = channelarray[0];
        var releaseDay = channelarray[1];
        var expirationDay = Number(releaseDay) + 2;
        var day = date.getDay() + 1;
        var month = date.getMonth() + 1;
        if(expirationDay > daysOfMonth.month) expirationDay -= daysOfMonth.month;
        if(day >= expirationDay || month >= releaseMonth){
            channel.setParent(newHome);
            message.channel.send(`Archived channel ${channel}`);
        }
    });
}

module.exports = { autoarchive }
