function archive(message,args){
    const newHome = args[0];
    message.channel.setParent(newHome);
    message.channel.send(`Successfully Archived ${message.channel}`);
}

module.exports = { archive }