const axios = require("axios");
const Discord = require("discord.js");

module.exports = {
  name: "aww",
  description: "Popatrz i się... uśmiechnij :)",
  cmd: "!aww, !aww kitku, !aww pjesu",
  async run(message, args, client) {
    if (args == "kitku") {
      getPhotoCat(message, args);
    } else if (args == "pjesu") {
      getPhotoDog(message, args);
    } else getPhotoDog(message, args);
  },
};

async function getPhotoDog(message, args) {
  await axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      const PuppyEmbed = new Discord.MessageEmbed()
        .setColor("#6666ff")
        .setTitle("🥰 Awwww! 🐕")
        .setImage(res.data.message)
        .setTimestamp();
      message.channel.send(PuppyEmbed);
    })
    .catch((err) => {
      message.reply(":x: Oops, coś poszło nie tak...");
      console.error(err);
    });
}

async function getPhotoCat(message, args) {
  let index = Math.floor(Math.random() * 1000);
  await axios
    .get("https://aws.random.cat/meow")
    .then((res) => {
      const PuppyEmbed = new Discord.MessageEmbed()
        .setColor("#6666ff")
        .setTitle("🥰 Awwww! 🐈")
        .setImage(res.data.file)
        .setTimestamp();
      message.channel.send(PuppyEmbed);
    })
    .catch((err) => {
      message.reply(":x: Oops, coś poszło nie tak...");
      console.error(err);
    });
}
