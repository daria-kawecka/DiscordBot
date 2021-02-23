fs = require("fs");

const Discord = require("discord.js");

const { token, prefix } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

//Bot power on:
client.on("ready", () => {
  console.log("Ready to do some stuff!!!");
  client.user.setPresence({
    activity: {
      name: "studiuję, bo lubię",
      type: 0,
    },
  });
});

//messages
//commands collection:
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command) {
    try {
      client.commands.get(command).run(message, args, client);
    } catch (error) {
      message.channel.send(
        "Ziomuś, nie mam pojęcia o co Ci chodzi... skup się albo użyj *!info* 🤔"
      );
    }
  }
});

//greeting new member on server:
client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "ogólny" || ch.name === "ynlógo"
  );
  if (!channel) return;
  channel.send(
    `Cześć, ${member}. Zdaje się, że będziemy razem studiować, hehe. Spoko, mam wprawę!`
  );
});

client.login(token);
