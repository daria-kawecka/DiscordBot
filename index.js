require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Cześć, cześć! Tutaj ja, ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content.includes("piwo")) {
    msg.reply("Jedno, dwa lub więcej!!!");
  }
});

//greeting new member on server:
client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );
  if (!channel) return;
  channel.send(
    `Cześć, ${member}. Zdaje się, że będziemy razem studiować, hehe. Spoko, mam wprawę!`
  );
});

client.login(process.env.TOKEN);
