/*requirements*/

const {Client, GatewayIntentBits, Events, Message} = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,
    ],
});

//break
//twitter posting
function istwitter(foo){
    if (foo.startsWith("https://x.com/" === true)){
        return "1";}
    else if (foo.startsWith("https://twitter.com/") === true){
        return "2";
    }
    else if (foo.startsWith("https://vxtwitter.com/") === true){
        return "3";
    }
    else return "0";
}
function dotwitter(string_,replace_,replacement_,author){
    replaced = string_.replace(replace_,replacement_);
    output = replaced.replace(/^/,author+"\n")
    return output;
}
client.on('messageCreate', (message) => {
    console.log(message)
    if (message.author.bot === false)
    {
        switch (istwitter(message.content)){
            case "1":
                message.delete();
                message.channel.send(dotwitter(message.content,"https://x.com/","https://fxtwitter.com",message.author.username));
                break;

            case "2":
                message.delete();
                message.channel.send(dotwitter(message.content,"https://twitter.com/","https://fxtwitter.com",message.author.username));
                break;

            case "3":
                message.delete();
                message.channel.send(dotwitter(message.content,"https://vxtwitter.com/","https://fxtwitter.com",message.author.username));
                break;
            default:
                return;}}})

//break
//login and logging

const {bottoken} = require('./token.json')
client.login(bottoken);
client.once(Events.ClientReady, c => {
    console.log(`${c.user.tag} start`);
});