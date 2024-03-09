const Discord = require("discord.js")
require('dotenv').config();
const GatewayIntentBits = Discord.GatewayIntentBits;
const client = new Discord.Client({intents:[
    GatewayIntentBits.MessageContent,
	GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
]})

var currentTime = new Date();
var sendToChannel;
const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

setInterval( () => {
    var currentTime = new Date();
    console.log("Current day is " + currentTime.getDay());
}, 1800000) // every 30 mins 1800000
 
setInterval( () => {
    if (currentTime.getDay() == 6 && currentTime.getHours() == 15 && sendToChannel) { // sends reminder on Sat between 3 to 4
        sendToChannel.send('@everyone Update your VMs')
        console.log("Reminder sent at " + currentTime)
    }
}, 3600000) // every hour 3600000

client.on('messageCreate', (msg) => {
    if (msg.content.startsWith('karl reminder')) {
        sendToChannel = msg.channel;
        sendToChannel.send('Reminders will be sent to this channel')
        console.log("Added channel \"" + sendToChannel.name + "\" in server \"" + msg.guild.name + '" for reminders')
    }
});
