const { token } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});
const category = {}

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

/**
 * This will basically formate the object so that we can implement commands section with  more ease.
 */

client.commands.forEach(obj => {
  let cmdObject = {
    name: obj.name,
    permissions: obj.authorPermission,
    usage: obj.usage,
    aliases: obj.aliases,
    cooldown: obj.cooldown,
    description: obj.description,
    category: obj.category
  }
  if(Object.keys(category).find(x => x === obj.category)) {
    category[obj.category].push(cmdObject)
  } else {
  category[obj.category] = [cmdObject]
  }
})


client.login(token);

module.exports = (io) => {
  io.on('connection', socket => {
    socket.emit("commands", (category))
  })
}