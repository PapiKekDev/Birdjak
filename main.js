/*requirements*/
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
//break
//twitter posting
function istwitter(foo) {
	switch (true) {
		case foo.startsWith("https://x.com/"):
			return "xx";
		case foo.startsWith("https://twitter.com/"):
			return "tw";
		case foo.startsWith("https://vxtwitter.com/"):
			return "vx";
		case foo.startsWith("https://www.instagram.com/"):
			return "dd";
		case foo.startsWith("https://www.reddit.com/"):
			return "rx";
		case foo.startsWith("&https://x.com/"):
			return "xxk";
		case foo.startsWith("&https://twitter.com/"):
			return "twk";
		case foo.startsWith("&https://vxtwitter.com/"):
			return "vxk";
		case foo.startsWith("&https://www.instagram.com/"):
			return "ddk";
		case foo.startsWith("&https://www.reddit.com/"):
			return "rxk";
		default:
			return "0";
	}
}

function dotwitter(string_, replace_, replacement_, author) {
	replaced = string_.replace(replace_, replacement_);
	output = replaced.replace(/^/, author + "\n")
	return output;
}
client.on('messageCreate', (message) => {
	//console.log(message)
	if (message.author.bot === false) {
		switch (istwitter(message.content)) {
			case "xx":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://x.com/", "https://fxtwitter.com/", message.author.username));
				break;
			case "tw":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://twitter.com/", "https://fxtwitter.com/", message.author.username));
				break;
			case "vx":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://vxtwitter.com/", "https://fxtwitter.com/", message.author.username));
				break;
			case "dd":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://www.instagram.com/", "https://www.ddinstagram.com/", message.author.username));
				break;
			case "rx":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://www.reddit.com/", "HA REDDITOR.... https://www.rxddit.com/", message.author.username));
				break;
			case "xxk":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://x.com/", "https://fxtwitter.com/", "euphorai"));
				break;
			case "twk":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://twitter.com/", "https://fxtwitter.com/", "euphorai"));
				break;
			case "vxk":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://vxtwitter.com/", "https://fxtwitter.com/", "euphorai"));
				break;
			case "ddk":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://www.instagram.com/", "https://www.ddinstagram.com/", "euphorai"));
				break;
			case "rxk":
				message.delete();
				message.channel.send(dotwitter(message.content, "https://www.reddit.com/", "HA REDDITOR.... https://www.rxddit.com/", "euphorai"));
				break;
			default:
				return;
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
