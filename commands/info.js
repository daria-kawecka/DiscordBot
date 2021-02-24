const Discord = require("discord.js");
const { author, botVersion } = require("../config.json");

const infoEmbed = new Discord.MessageEmbed()
  .setColor("#ff3399")
  .setTitle("👍 Wieczny student 👍")
  .setDescription("Poznajmy się lepiej")
  .setThumbnail("https://imgur.com/gQzFLZ4.png")
  .addFields(
    { name: "Autor(ka)", value: author },
    { name: "Aktualna wersja", value: botVersion }
  )
  .setTimestamp()
  .setFooter(
    "https://github.com/daria-kawecka",
    "https://avatars.githubusercontent.com/u/62625016?s=460&u=af38edac77ee44ab4390f8c1b0ecb19fe2ddce97&v=4"
  );
module.exports = {
  name: "info",
  description: "wszystko, co istotne",
  cmd: "!info",
  run(message, args, client) {
    getCommands(client, message);
    message.channel.send(infoEmbed);
  },
};

function getCommands(client, message) {
  const cmd = client.commands.map((command) => command.cmd);
  infoEmbed.spliceFields(2, 1);
  infoEmbed.addField("Dostępne komendy", cmd);
}
