// DISCORD MASS DM BOT ULTRA FAST V1
// THIS IS THE FASTEST MASS DM BOT OUT THERE
//  PLEASE SUBSCRIVBE AND LIKE THE VIDEO.


const Discord = require('discord.js');
const { Id, token, prefix } = require('./config.json');
const Bot = new Discord.Client();({ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });

Bot.on("message", message => {
  if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != Id) {
      return message.reply('Only Owner is Allowed to Use this Command')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      if (message.guild) {
        message.guild.members.cache.forEach(member => {
          member.send(argresult).then(console.log(`${member.user.username}#${member.user.discriminator}`))
          .catch(err => console.error(`-----[DM's Disabled]----- \n${member.user.username}#${member.user.discriminator}`));
          console.log(`.....DONE....`)
        })
        message.channel.send(`**DONE**`).then(message.delete({ timeout: 1000 }));
      } else {
        message.channel.send('This command can only be used in a server.').then(message.delete({ timeout: 1000 }));
      }
    }
  }
})

Bot.login(token);
