//discordjs
const {
    Client,
    GatewayIntentBits,
    Events,
    Message
} = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,
    ],
});

//Functions
function IsLink(_Message) {
    return _Message.startsWith("https://x.com/") || _Message.startsWith("||https://x.com/")
        || _Message.startsWith("https://twitter.com/") || _Message.startsWith("||https://twitter.com/")
        || _Message.startsWith("https://vxtwitter.com/") || _Message.startsWith("||https://vxtwitter.com/")
        || _Message.startsWith("https://instagram.com/") || _Message.startsWith("||https://instagram.com/")
        || _Message.startsWith("https://reddit.com/") || _Message.startsWith("||https://reddit.com/");
}

function IsTwt(_Message) {
    return _Message.startsWith("https://x.com/") || _Message.startsWith("||https://x.com/")
        || _Message.startsWith("https://twitter.com/") || _Message.startsWith("||https://twitter.com/")
        || _Message.startsWith("https://vxtwitter.com/") || _Message.startsWith("||https://vxtwitter.com/")
}

function FxLink(_Message, _Author) {
    switch (true) {

        case IsTwt(_Message):
            return _Message.replace(/https:.*.com/, "https://vxtwitter.com").replace(/^/, _Author + "\n")

        case _Message.startsWith("https://instagram.com/") || _Message.startsWith("||https://instagram.com/"):
            return _Message.replace(/https:.*.com/, "https://ddinstagram.com").replace(/^/, _Author + "\n")

        case _Message.startsWith("https://reddit.com/") || _Message.startsWith("||https://reddit.com/"):
            return _Message.replace(/https:.*.com/, "https://rxddit.com").replace(/^/, _Author + "\n")

        default:
            return _Author + "unknown error. contact maintainer"
    }
}


//BotLogic
client.on('messageCreate', (message) => {
    //console.log(message)
    if (message.author.bot === false) {
        if (IsLink(message.content)) {
            message.delete()
            message.channel.send(FxLink(message.content, message.author));
        }
        if (message.content.startsWith("##")) {
            if (IsLink(message.content.substring(0, 2))) {
                message.delete()
                message.channel.send(FxLink(message.content.substring(0, 2), message.author.username));
            }
        }
    }
})


//break
//login and logging
const {
    bottoken
} = require('./token.json')
client.login(bottoken);
client.once(Events.ClientReady, c => {
    console.log(`${c.user.tag} start`);
});
