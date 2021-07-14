const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join(793531559298465818) 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('** پێویستە تۆ لە ڤۆیسەکە بیت **'); // hech lera maka 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`https://discord.gg/k6SYQ8sS2M`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("793531558710607947").send( // id channaly reklam labayny ("lera") daybny
`>  By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Reklam Bo Mn Bnera`) //دیکرپشینی بوتەکه نمونە (Reklam bo mn bnera ) لە ژیر بیو بوتەکە دیار دەبی
});




client.login("Nzk4NjEyMjM4ODM4OTIzMzA1.X_3jmw.7k9guiBAhz6Dg9RXKlZBSmF54fg");// Your Token
